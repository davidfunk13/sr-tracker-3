const gameTypeDefs = `
type Game {
    _id: ID!
    _session: ID!
    role: Int!
    mapPlayed: String!
    heroesPlayed: [String]!
    outcome: Int!
    rankIn: Int!
    rankOut: Int!
}
`;

module.exports = gameTypeDefs;