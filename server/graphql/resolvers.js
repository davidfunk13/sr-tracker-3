const Battletag = require("../db/models/battletag");

const resolvers = {
  Query: {
    async allBattletags(parent, args, ctx, info) {
      return await Battletag.find();
    },
    // async searchBattletags(parent, { name }) {
    //   return await Battletag.find();
    // },
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
