const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/user', bodyParser.json(), (req, res) => {
  console.log('RECEIVED!');
  console.log(req.body);
});

app.listen(port, () => console.log(`App listening on Port: ${port}`));