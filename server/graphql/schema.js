const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers').default;

const typeDefs = `
 type Query{
     hello: String,
 }`;

exports.default = makeExecutableSchema({ typeDefs, resolvers });