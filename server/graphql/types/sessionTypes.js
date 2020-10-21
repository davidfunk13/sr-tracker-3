const sessionTypeDefs = `
type Session {
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
`;

module.exports = sessionTypeDefs;