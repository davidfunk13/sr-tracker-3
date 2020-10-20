const inputTypes = `
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

input GameInput {
    _season: ID!
    role: Int!
    mapPlayed: String!
    heroesPlayed: [String]!
    outcome: Int!
    rankIn: Int!
    rankOut: Int!
}

input SeasonInput {
    _battletag: ID!
    tankSR: Int!
    damageSR: Int!
    supportSR: Int!
}

input StatsInput{
    hero: String!
    _battletag: ID!
    ruleset: String!
}
`;

module.exports = inputTypes;