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
    createdAt: String!
    updatedAt: String
}
`;

module.exports = gameTypeDefs;