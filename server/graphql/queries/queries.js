const queries = `
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
`;

module.exports = queries;