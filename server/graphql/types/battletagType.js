const graphql = require('graphql');
const { Mongoose } = require('mongoose');
const battletag = require('../../db/models/battletag');
const {
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
} = graphql;

//can declare interfaces as root classes, extend with 'type RootType implements ExtensionType';

//can import enum's for things like platforms, winlossdraw, heroes.

const BattletagType = new GraphQLObjectType({
    name: 'Battletag',
    fields: () => ({
        _id: { type: GraphQLID, },
        id: { type: GraphQLInt },
        isPublic: { type: GraphQLBoolean },
        level: { type: GraphQLInt },
        name: { type: GraphQLString },
        platform: GraphQLString,
        playerLevel: GraphQLInt,
        portrait: GraphQLString,
        urlName: GraphQLString,
    })
});

module.exports = BattletagType;