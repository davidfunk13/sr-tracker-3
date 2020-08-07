module.exports = typeDefs = `

type Battletag {
    _id: ID!
    id: Int!
    isPublic: Boolean!
    level: Int!
    name: String!
    platform: String!
    playerLevel: Int!
    portrait: String!
    urlName: String!
    _seasons: [Season]
}

type Season {
    _id:ID!
    _battletag: ID!
    tankSR: Int!
    damageSR: Int!
    supportSR: Int!
}

input SeasonInput {
    _battletag: ID!
    tankSR: Int!
    damageSR: Int!
    supportSR: Int!
}

input BattletagInput {
    _user: ID!
    id: Int!
    isPublic: Boolean!
    level: Int!
    name: String!
    platform: String!
    playerLevel: Int!
    portrait: String!
    urlName: String!
}

type Query {
    getOneBattletag(_id: ID!): Battletag
    getOneSeason(_id: ID!): Season
    getAllBattletags(_user: ID!): [Battletag]
    getAllSeasons(_battletag: ID!): [Season]
    searchBattletags(battletag: String): [Battletag]
}

type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    createSeason(input:SeasonInput!) : [Season]
    deleteBattletag(_id: ID!) : Battletag
    deleteSeason(_id: ID!) : Season
}`;