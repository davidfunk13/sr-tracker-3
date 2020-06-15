const express = require("express");

const cors = require("cors");

const checkJwt = require('./middleware/checkJwt');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.listen(PORT, () => {
  console.log('API listening on 3001');
});