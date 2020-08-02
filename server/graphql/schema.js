const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers').default;

const typeDefs = `
type Battletag {
    _id: ID,
    id: Int!,
    isPublic: Boolean!,
    level: Int!,
    name: String!,
    platform: String!,
    playerLevel: Int!,
    portrait: String!,
    urlName: String!,
}

type BlizzAPIBattletag {
    id: Int!,
    isPublic: Boolean!,
    level: Int!,
    name: String!,
    platform: String!,
    playerLevel: Int!,
    portrait: String!,
    urlName: String!,
}

input BattletagInput {
    id: Int!,
    isPublic: Boolean!,
    level: Int!,
    name: String!,
    platform: String!,
    playerLevel: Int!,
    portrait: String!,
    urlName: String!,
}

type Query {
     allBattletags: [Battletag],
    searchBattletags(battletag: String): [BlizzAPIBattletag],
}

type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    deleteBattletag(_id: ID!) : Battletag
}
 `;

exports.default = makeExecutableSchema({ typeDefs, resolvers });