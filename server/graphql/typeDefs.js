const statTypes = require('./types/statTypes');
const gameTypes = require('./types/gameTypes');
const seasonTypes = require('./types/seasonTypes');
const battletagTypes =require('./types/battletagTypes');
const queries = require('./queries/queries');
const mutations = require('./mutations/mutations');
const inputTypes = require('./inputs/inputTypes');

module.exports = typeDefs = `
${battletagTypes}

${gameTypes}

${seasonTypes}

${inputTypes}

${statTypes}

${queries}

${mutations}
`;

