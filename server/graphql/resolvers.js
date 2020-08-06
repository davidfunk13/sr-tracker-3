const Battletag = require("../db/models/Battletag/battletag");
const Season = require("../db/models/Season/season");
const searchBattletags = require('../graphql/resolverFunctions/searchBattletags');

const resolvers = {
  Query: {
    async getOneBattletag(_, { _id }) {
      return await Battletag.findById(_id);
    },
    async getOneSeason(_, { _id }) {
      return await Season.findById(_id);
    },
    async getAllBattletags(parent, args, ctx, info) {
      return await Battletag.find();
    },
    async getAllSeasons(_, { _battletag }) {
      const populated = await Battletag.findById(_battletag).populate('_seasons');
      
      return await populated._seasons;
    },
    async searchBattletags(parent, { battletag }) {
      return await searchBattletags(battletag);
    },
  },
  Mutation: {
    async createBattletag(_, { input }) {
      const battletag = new Battletag(input);

      return await battletag.save();
    },
    async createSeason(_, { input }) {
      let season = new Season(input);

      season = await season.save();

      const battletag = await Battletag.findById(season._battletag);

      battletag._seasons.push(season._id);

      try {
        battletag.save();

        return 'This battletag was saved successfully with a new season in it.';
      } catch{
        return 'There was an error saving this battletag with an updated season.'
      }
    },
    async deleteBattletag(_, { _id }) {
      return await Battletag.findByIdAndDelete(_id);
    },
    async deleteSeason(_, { _id }) {
      return await Season.findByIdAndDelete(_id);
    },
  },
};

exports.default = resolvers;