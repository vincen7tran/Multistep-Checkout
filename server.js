const express = require('express');
const bodyParser = require('body-parser');
const models = require('./server/db/models');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/user', bodyParser.json(), (req, res) => {
  models.personal.post(req.body, (err, results) => {
    if (err) return console.log(err);
    res.sendStatus(201);
  });
});

app.listen(port, () => console.log(`App listening on Port: ${port}`));