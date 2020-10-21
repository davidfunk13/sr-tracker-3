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
    _session: ID!
    role: Int!
    mapPlayed: String!
    heroesPlayed: [String]!
    outcome: Int!
    rankIn: Int!
    rankOut: Int!
}

input SessionInput {
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