const battletagTypeDefs = `
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
    _sessions: [Session]
    createdAt: String!
    updatedAt: String
}

`;

module.exports = battletagTypeDefs;