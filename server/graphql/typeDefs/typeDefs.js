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

type Game {
    _id: ID!
    _season: ID!
    role: Int!
    mapPlayed: String!
    heroesPlayed: [String]!
    outcome: Int!
    rankIn: Int!
    rankOut: Int!
}

input GameInput {
    _season: ID!
    role: Int!
    mapPlayed: String!
    heroesPlayed: [String]!
    outcome: Int!
    rankIn: Int!
    rankOut: Int!
}

type Season {
    _id:ID!
    _battletag: ID!
    tankSR: Int!
    startingTankSR: Int!
    damageSR: Int!
    startingDamageSR: Int!
    supportSR: Int!
    startingSupportSR: Int!
    createdAt: String!
    updatedAt: String
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
    searchBattletags(battletag: String): [Battletag]
    getOneBattletag(_id: ID!): Battletag
    getAllBattletags(_user: ID!): [Battletag]
    getOneSeason(_id: ID!): Season
    getAllSeasons(_battletag: ID!): [Season]
    getMostRecentSeason(_battletag: ID!): Season
    getAllGames(_season: ID!): [Game]
    getAllGamesOfType(_season: ID!, role: Int!): [Game]
}

type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    deleteBattletag(_id: ID!) : Battletag
    createSeason(input:SeasonInput!) : Season
    deleteSeason(_id: ID!) : Season
    createGame(input: GameInput!) : Game
    updateGame(_id: ID!, updatedGames: GameInput!) : Game
    deleteGame(_id: ID!) : Game
}`;

