const statTypes = require('./types/statTypes');
const gameTypes = require('./types/gameTypes');
const seasonTypes = require('./types/seasonTypes');
const battletagTypes = require('./types/battletagTypes');
const queries = require('./types/queries');
const mutations = require('./types/mutations');
const inputTypes = require('./types/inputTypes');

module.exports = typeDefs = `
${battletagTypes}

${gameTypes}

${seasonTypes}

${inputTypes}

${statTypes}

${queries}

${mutations}
`;

