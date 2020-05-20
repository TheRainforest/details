const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const db = require('../database/controllers');

console.log(db);

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  db(itemId, (err, success) => {
    if (err) {
      console.log(err);
      res.sendStatus(404).end();
    } else {
      res.send(success).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
