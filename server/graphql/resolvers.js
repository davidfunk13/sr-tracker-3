const Battletag = require("../db/models/battletag");
const resolvers = {
    Query: {
        allBattletags(parent, args, ctx, info) {

            return [{
                id: 1,
                isPublic: false,
                level: 1,
                name: 'buttkegels#1602',
                platform: 'pc',
                playerLevel: 9001,
                portrait: '00000000x000',
                urlName: 'buttkegels-1602'
            }, {
                id: 1,
                isPublic: false,
                level: 1,
                name: 'nakeddave#11750',
                platform: 'nintendo-switch',
                playerLevel: 333331,
                portrait: '55555x3wefw3',
                urlName: 'nakeddave-11750'
            }]
        },
    },
    Mutation: {
        async createBattletag(_, { input }) {
            return await new Battletag.create(input)
        }
    },
}

exports.default = resolvers;