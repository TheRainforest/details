const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const { getDoc, createDoc, deleteDoc } = require('../database/controllers');

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/items/', (req, res) => {
  createDoc(req.body, (err) => {
    if (err) {
      console.log(`error saving: ${err}`)
      res.status(400);
      res.end();
    } else {
      console.log('saved id: ', req.body.id);
      res.status(201);
      res.end();
    }
  });
});

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  getDoc(itemId, (err, success) => {
    if (err) {
      console.log(`error fetching: ${err}`);
      res.sendStatus(404).end();
    } else {
      res.send(success).end();
    }
  });
});

app.delete('/items/:id', (req, res) => {
  deleteDoc(req.params.id, (err, success) => {
    if (err) {
      console.log(`error deleteing: ${err}`);
      res.sendStatus(404).send('cannot delete');
    } else {
      console.log(`deleted id: ${success.id}`);
      res.status(200);
      res.send(success).end();
    }
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
