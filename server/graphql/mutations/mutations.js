const mutations = `
type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    deleteBattletag(_id: ID!) : Battletag
    createSeason(input:SeasonInput!) : Season
    deleteSeason(_id: ID!) : Season
    createGame(input: GameInput!) : Game
    updateGame(_id: ID!, updatedGames: GameInput!) : Game
    deleteGame(_id: ID!) : Game
}
`;

module.exports = mutations;