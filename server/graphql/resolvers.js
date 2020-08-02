const Battletag = require("../db/models/battletag");
 const searchBattletags = require('../graphql/resolverFunctions/searchBattletags');

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
    async createBattletag(_, { input }) {
      return await Battletag.create(input);
    },
    async deleteBattletag(_, { _id }) {
      return await Battletag.findByIdAndDelete(_id);
    },
  },
};

exports.default = resolvers;
