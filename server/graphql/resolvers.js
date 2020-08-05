const Battletag = require("../db/models/Battletag/battletag");
const Season = require("../db/models/Season/season");
const searchBattletags = require('../graphql/resolverFunctions/searchBattletags');
const { doTypesOverlap } = require("graphql");

const resolvers = {
  Query: {
    async allBattletags(parent, args, ctx, info) {
      return await Battletag.find();
    },
    async searchBattletags(parent, { battletag }) {
      return await searchBattletags(battletag);
    },
  },
  Mutation: {
    async createSeason(_, { input }) {
      const season = new Season(input);

      const doc = await season.save();

      const { _battletag } = doc;

      const battletag = await Battletag.findById(_battletag);

      battletag._seasons.push(doc);

      const updatedBattletag = await battletag.save();

      console.log(await updatedBattletag.populate('seasons'));
      // const populatedSeaons = updatedBattletag.populate('season');

      // return updatedBattletag.populatedSeaons;

    },
    async createBattletag(_, { input }) {
      return await Battletag.create(input);
    },
    async deleteBattletag(_, { _id }) {
      return await Battletag.findByIdAndDelete(_id);
    },
  },
};

exports.default = resolvers;
