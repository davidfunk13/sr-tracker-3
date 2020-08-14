module.exports = typeDefs = `

type Battletag {
    _id: ID!
    _user: ID!
    id: Int!
    isPublic: Boolean!
    level: Int!
    name: String!
    platform: String!
    playerLevel: Int!
    portrait: String!
    urlName: String!
    _seasons: [Season]
    createdAt: String!
    updatedAt: String
}

type Season {
    _id:ID!
    _battletag: ID!
    tankSR: Int!
    startingTankSR: Int!
    preferredTanks: []
    damageSR: Int!
    startingDamageSR: Int!
    preferredDamage: []
    supportSR: Int!
    startingSupportSR: Int!
    preferredSupport: []
    createdAt: String!
    updatedAt: String
}

input SeasonInput {
    _battletag: ID!
    tankSR: Int!
    preferredTanks: []
    damageSR: Int!
    preferredDamage: []
    supportSR: Int!
    preferredSupport: []
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
    getMostRecentSeason(_battletag: ID!): Season
    getAllBattletags(_user: ID!): [Battletag]
    getAllSeasons(_battletag: ID!): [Season]
    searchBattletags(battletag: String): [Battletag]
}

type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    createSeason(input:SeasonInput!) : Season
    deleteBattletag(_id: ID!) : Battletag
    deleteSeason(_id: ID!) : Season
}`;