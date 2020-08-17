const cors = require("cors");

const express = require("express");

const { graphqlHTTP } = require('express-graphql');

const checkJwt = require('./middleware/checkJwt');

const PORT = process.env.PORT || 3001;

const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;

let connectionString;

if (process.env.NODE_ENV === 'production') {
  connectionString = process.env.MONGO_DB_URI;
} else {
  connectionString = "localhost:27017/sr-tracker";
}

mongoose.connect('mongodb://' + connectionString, { useNewUrlParser: true, useUnifiedTopology: true }).then(data => {
  if (data) {
    console.log('connected');
  }
})

const schema = require('./graphql/schema').default;

// app.use(checkJwt);

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

if (process.env.NODE_ENV === 'production') {
  //if you have weird errors with storing images etc in static dir this is why. back out a dir.
  app.use(express.static("client/build"));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log('API listening on 3001');
});