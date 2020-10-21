const queries = `
type Query {
  searchBattletags(battletag: String): [Battletag]
  getBattletagStats(input: StatsInput! ): Stats
  getOneBattletag(_id: ID!): Battletag
  getAllBattletags(_user: ID!): [Battletag]
  getOneSession(_id: ID!): Session
  getAllSessions(_battletag: ID!): [Session]
  getMostRecentSession(_battletag: ID!): Session
  getAllGames(_session: ID!): [Game]
  getMostRecentGame(_session: ID!): Game
  getAllGamesOfType(_session: ID!, role: Int!): [Game]
} 
`;

module.exports = queries;