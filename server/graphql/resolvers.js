const Battletag = require("../db/models/Battletag/battletag");
const Session = require("../db/models/Session/session");
const Game = require("../db/models/Game/game");
const searchBattletags = require('./resolvers/searchBattletags');
const getBattletagStats = require("./resolvers/getBattletagStats");

// parent, args, ctx, info
const resolvers = {
  Query: {
    async searchBattletags(parent, { battletag }) {
      return await searchBattletags(battletag);
    },
    async getBattletagStats(parent, { input }) {
      return await getBattletagStats(input);
    },
    async getOneBattletag(_, { _id }) {
      return await Battletag.findById(_id);
    },
    async getAllBattletags(_, { _user }) {
      return await Battletag.find({ _user: _user });
    },
    async getOneSession(_, { _id }) {
      return await Session.findById(_id);
    },
    async getAllSessions(_, { _battletag }) {
      const populated = await Battletag.findById(_battletag).populate('_sessions');

      return await populated._sessions;
    },
    async getMostRecentSession(_, { _battletag }) {
      const sessions = await Session.find({ _battletag: _battletag });

      const mostRecentSession = sessions.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return mostRecentSession[0];
    },
    async getAllGames(_, { _session }) {
      return await Game.find({ _session: _session });
    },
    async getMostRecentGame(_, { _session }) {
      const gamesSorted = await Game.find({ _session: _session }, null, { sort: { 'createdAt': -1 }, limit: 1 });

      const mostRecent = gamesSorted[0];

      return mostRecent;
    },
    async getAllGamesOfType(_, { _session, role }) {
      return await Game.find({ _session: _session, role: role });
    },
  },
  Mutation: {
    async createBattletag(_, { input }) {
      const battletag = new Battletag(input);

      return await battletag.save();
    },
    async createSession(_, { input }) {
      const newSession = {
        ...input,
        startingTankSR: input.tankSR,
        startingSupportSR: input.supportSR,
        startingDamageSR: input.damageSR
      }

      let session = new Session(newSession);

      session = await session.save();

      const battletag = await Battletag.findById(session._battletag);

      battletag._sessions.push(session._id);

      battletag.save();

      const sessions = await Session.find({ _battletag: battletag._id });

      const mostRecentSession = sessions.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return mostRecentSession[0];
    },
    async createGame(_, { input }) {
      let game = new Game(input);

      game = await game.save();

      const session = await Session.findById(input._session);

      if (!game) {
        if (game.role === undefined || game.role === null || !game.rankOut === undefined || !game.rankOut === null) {
          console.log('game not saved successfully');
          return;
        }
      }

      switch (game.role) {
        case 0:
          console.log("Updating tank SR...");
          session.tankSR = game.rankOut;
          break;
        case 1:
          console.log("Updating damage SR...");
          session.damageSR = game.rankOut;
          break;
        case 2:
          console.log("Updating support SR...");
          session.supportSR = game.rankOut;
          break;
        default:
          console.log("something went wrong with game role");
          break;
      }

      session._games.push(game._id);

      session.save();

      return game;
    },
    async updateGame(_, { _id, updatedGame }) {
      return await Game.findByIdAndUpdate(_id, updatedGame);
    },
    async deleteGame(_, { _id }) {
      return await Game.findByIdAndRemove(_id);
    },
    async deleteBattletag(_, { _id }) {
      //get array of sessions
      const sessions = await Session.find({ _battletag: _id });

      //loop through and delete any games that belong to each session using the session's ID.
      sessions.map(session => {
        return Game.deleteMany({ _session: session._id }).then(deleted => console.log("Deleted Games", deleted));
      });

      //delete all the sessions with the battletag id
      await Session.deleteMany({ _battletag: _id }).then(deletedSessions => console.log('sessions deleted', deletedSessions));

      //delete battletag
      await Battletag.findByIdAndDelete(_id).then(deletedBattletag => console.log("Battletag deleted", deletedBattletag));
    },
    async deleteSession(_, { _id }) {
      await Game.deleteMany({ _session: _id }).then(deletedGames => {
        console.log("Games deleted:" + deletedGames)
      });

      return await Session.findByIdAndDelete(_id);
    },
  },
};

exports.default = resolvers;