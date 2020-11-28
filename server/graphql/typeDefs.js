const gameTypes = require('./types/gameTypes');
const sessionTypes = require('./types/sessionTypes');
const battletagTypes = require('./types/battletagTypes');
const queries = require('./types/queries');
const mutations = require('./types/mutations');
const inputTypes = require('./types/inputTypes');

module.exports = typeDefs = `
${battletagTypes}

${gameTypes}

${sessionTypes}

${inputTypes}

${queries}

${mutations}
`;

