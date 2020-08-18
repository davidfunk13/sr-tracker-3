const Battletag = require("../db/models/Battletag/battletag");
const Season = require("../db/models/Season/season");
const Game = require("../db/models/Game/game");
const searchBattletags = require('../graphql/resolverFunctions/searchBattletags');

// parent, args, ctx, info

const resolvers = {
  Query: {
    async searchBattletags(parent, { battletag }) {
      return await searchBattletags(battletag);
    },
    async getOneBattletag(_, { _id }) {
      return await Battletag.findById(_id);
    },
    async getAllBattletags(_, { _user }) {
      return await Battletag.find({ _user: _user });
    },
    async getOneSeason(_, { _id }) {
      return await Season.findById(_id);
    },
    async getAllSeasons(_, { _battletag }) {
      const populated = await Battletag.findById(_battletag).populate('_seasons');

      return await populated._seasons;
    },
    async getMostRecentSeason(_, { _battletag }) {
      const seasons = await Season.find({ _battletag: _battletag });

      const mostRecentSeason = seasons.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return mostRecentSeason[0];
    },
    async getAllGames(_, { _season }) {
      return await Game.find({ _season: _season });
    },
    async getAllGamesOfType(_, { _season, role }) {
      return await Game.find({ _season: _season, role: role });
    },
  },
  Mutation: {
    async createBattletag(_, { input }) {
      console.log(input)
      const battletag = new Battletag(input);

      return await battletag.save();
    },
    async createSeason(_, { input }) {
      const newSeason = {
        ...input,
        startingTankSR: input.tankSR,
        startingSupportSR: input.supportSR,
        startingDamageSR: input.damageSR
      }

      let season = new Season(newSeason);

      season = await season.save();

      const battletag = await Battletag.findById(season._battletag);

      battletag._seasons.push(season._id);

      battletag.save();

      const seasons = await Season.find({ _battletag: battletag._id });

      const mostRecentSeason = seasons.sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return mostRecentSeason[0];
    },
    async createGame(_, { input }) {
      console.log(input)
      let game = new Game(input);

      game = await game.save();

      const season = await Season.findById(input._season);

      season._games.push(game._id);

      season.save();
      console.log(game)
      
      return game;
    },
    async updateGame(_, { _id, updatedGame }) {
      return await Game.findByIdAndUpdate(_id, updatedGame);
    },
    async deleteGame(_, { _id }) {
      return await Game.findByIdAndRemove(_id);
    },
    async deleteBattletag(_, { _id }) {
      await Season.deleteMany({ _battletag: _id }).then((deletedSeasons) => console.log({ deletedSeasons }));
      await Battletag.findByIdAndDelete(_id).then((deletedBattletag) => console.log({ deletedBattletag }));
    },
    async deleteSeason(_, { _id }) {
      return await Season.findByIdAndDelete(_id);
    },
  },
};

exports.default = resolvers;