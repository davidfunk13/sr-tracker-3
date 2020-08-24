const gameTypeDefs = `
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
`;

module.exports = gameTypeDefs;