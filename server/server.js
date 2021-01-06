require('dotenv').config();

const path = require('path');

const cors = require("cors");

const bodyParser = require('body-parser');

const express = require("express");

const { graphqlHTTP } = require('express-graphql');

const checkJwt = require('./middleware/checkJwt');

const PORT = process.env.PORT || 3001;

const app = express();

const mongoose = require('mongoose');

const getBattletagStats = require("./graphql/resolvers/getBattletagStats");

app.use(express.json());

mongoose.Promise = global.Promise;

let connectionString;

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.MONGO_DB_URI;
} else {
  connectionString = "mongodb://localhost:27017/sr-tracker";
}

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(data => {
  if (data) {
    console.log('connected');
  }
});

const schema = require('./graphql/schema').default;

let useGraphiQL = process.env.NODE_ENV === 'production' ? false : true;

if (process.env.NODE_ENV === 'production') {
  console.log({ env: 'Prod' })
  //if you have weird errors with storing images etc in static dir this is why. back out a dir.
  app.use(express.static("client/build"));

  app.get('/*', function (req, res) {
    console.log(req.body, req.params, req.query, { req });

    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
};

app.post('/stats', (req, res) => {
  getBattletagStats(req, res)
});

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: useGraphiQL,
  context: app.use(checkJwt),
}));

app.listen(PORT, () => {
  console.log('API listening on 3001');
});