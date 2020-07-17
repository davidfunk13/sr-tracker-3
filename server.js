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