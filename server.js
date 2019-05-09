const express = require('express');
const bodyParser = require('body-parser');
const models = require('./server/db/models');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/users', bodyParser.json(), (req, res) => {
  console.log(req.body);
  models.users.post(req.body, (err, results) => {
    if (err) return console.log(err);
    res.sendStatus(201);
  });
});

app.post('/shipping', bodyParser.json(), (req, res) => {
  console.log(req.body);
  models.shipping.post(req.body, (err, results) => {
    if (err) return console.log(err);
    res.sendStatus(201);
  });
});

app.post('/credit', bodyParser.json(), (req, res) => {
  console.log(req.body);
  models.credit.post(req.body, (err, results) => {
    if (err) return console.log(err);
    res.sendStatus(201);
  });
});

app.listen(port, () => console.log(`App listening on Port: ${port}`));