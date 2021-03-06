const jwt = require("express-jwt");

const jwksRsa = require("jwks-rsa");

require('dotenv').config();

const authConfig = {
    domain: process.env.DOMAIN,
    audience: process.env.AUDIENCE,
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});

console.log(checkJwt)

module.exports = checkJwt;