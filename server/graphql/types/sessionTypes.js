const sessionTypeDefs = `
type Session {
    _id:ID!
    _battletag: ID!
    sessionRole: Int!
    skillRatingStart: Int!
    skillRatingCurrent: Int!
    _games: [Game]
    createdAt: String!
    updatedAt: String
}
`;

module.exports = sessionTypeDefs;