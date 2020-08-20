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

input StatsInput{
    hero: String!,
    id: ID!
    ruleset: String!
}


type Info {
    ruleset: String,
    hero: String
}

type best {
    all_damage_done: String,
    barrier_damage_done: String,
    defensive_assists: String,
    eliminations: String,
    environmental_kills: String,
    final_blows: String,
    healing_done: String,
    hero_damage_done: String,
    kill_streak: String,
    melee_final_blows: String,
    multikill: String,
    objective_kills: String,
    objective_time: String,
    offensive_assists: String,
    recon_assists: String,
    solo_kills: String,
    teleporter_pad_destroyed: String,
    time_spent_on_fire: String,
    turrets_destroyed: String
}

type assists {
    defensive_assists: String,
    healing_done: String,
    offensive_assists: String,
    recon_assists: String
}

type match_awards {
    cards: String,
    medals: String
}

type combat {
    all_damage_done: String,
    barrier_damage_done: String,
    damage_done: String,
    deaths: String,
    eliminations: String,
    environmental_kills: String,
    final_blows: String,
    hero_damage_done: String,
    melee_final_blows: String,
    multikills: String,
    objective_kills: String,
    objective_time: String,
    solo_kills: String,
    time_spent_on_fire: String
}

type game {
    games_lost: String,
    games_played: String,
    games_tied: String,
    games_won: String,
    time_played: String
},

type miscellaneous {
    teleporter_pads_destroyed: String,
    turrets_destroyed: String
},

type average {
    all_damage_done: String,
    barrier_damage_done: String,
    deaths: String,
    eliminations: String,
    final_blows: String,
    healing_done: String,
    hero_damage_done: String,
    objective_kills: String,
    objective_time: String,
    solo_kills: String,
    time_spent_on_fire:String
}

type Stats {
    Info : Info
    Best : best
    Assists : assists
    Match_Awards : match_awards
    Combat: combat
    Game : game
    Miscellaneous : miscellaneous 
    Average : average
}

type Query {
    searchBattletags(battletag: String): [Battletag]
    getBattletagStats(input: StatsInput! ): Stats
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

