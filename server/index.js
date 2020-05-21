const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { getDoc, createDoc } = require('../database/controllers');

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/items/', (req, res) => {
  createDoc(req.body, (err) => {
    if (err) {
      res.status(400);
      res.end();
    } else {
      console.log('item was created with id: ', req.body.id);
      res.status(201);
      res.end();
    }
  });
});

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  getDoc(itemId, (err, success) => {
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
