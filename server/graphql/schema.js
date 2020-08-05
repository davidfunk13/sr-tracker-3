const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers').default;

const typeDefs = `
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

type Battletag {
    _id: ID
    id: Int!,
    isPublic: Boolean!,
    level: Int!,
    name: String!,
    platform: String!,
    playerLevel: Int!,
    portrait: String!,
    urlName: String!,
    seasons: [Season],
}

type Season {
    _id: ID
    _battletag: ID!,
    tankSR: Int!,
    damageSR: Int!,
    supportSR: Int!,
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
    seasons: [SeasonInput],
}

input SeasonInput {
    _battletag: ID!,
    tankSR: Int!,
    damageSR: Int!,
    supportSR: Int!,
}

type Query {
    allBattletags: [Battletag],
    searchBattletags(battletag: String): [BlizzAPIBattletag],
}

type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    createSeason(input:SeasonInput!) : [Season]
    deleteBattletag(_id: ID!) : Battletag
}
 `;

exports.default = makeExecutableSchema({ typeDefs, resolvers });