const mutations = `
type Mutation {
    createBattletag(input:BattletagInput!) : Battletag
    deleteBattletag(_id: ID!) : Battletag
    createSession(input:SessionInput!) : Session
    deleteSession(_id: ID!) : Session
    createGame(input: GameInput!) : Game
    updateGame(_id: ID!, updatedGames: GameInput!) : Game
    deleteGame(_id: ID!) : Game
}
`;

module.exports = mutations;