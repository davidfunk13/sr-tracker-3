const resolvers = {
    Query: {
        hello(parent, args, ctx, info) {
            return 'Hello, World!' 
        }
    }
}

exports.default = resolvers;