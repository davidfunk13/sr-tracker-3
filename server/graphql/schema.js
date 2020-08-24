const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./typeDefs');

const resolvers = require('./resolvers').default;

exports.default = makeExecutableSchema({ typeDefs, resolvers });