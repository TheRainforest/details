const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const {
  getDoc, saveDoc, updateDoc, deleteDoc,
} = require('../database/controllers');

const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/items/', (req, res) => {
  saveDoc(req.body, (err) => {
    if (err) {
      console.log(`error saving: ${err}`);
      res.sendStatus(400);
    } else {
      console.log('saved id: ', req.body.id);
      res.sendStatus(201);
    }
  });
});

app.get('/items/:id', (req, res) => {
  const itemId = req.params.id;
  getDoc(itemId, (err, success) => {
    if (err) {
      console.log(`error fetching: ${err}`);
      res.sendStatus(404);
    } else {
      res.send(success).end();
    }
  });
});

app.put('/items/:id', (req, res) => {
  const key = Object.keys(req.body);
  const value = Object.values(req.body);
  updateDoc(req.params.id, key[0], value[0], (err, success) => {
    if (err) {
      console.log(`error updating: ${err}`);
      res.sendStatus(404);
    } else {
      console.log(`updated id: ${success.id}`);
      res.status(200);
      res.send(success).end();
    }
  });
});

app.delete('/items/:id', (req, res) => {
  deleteDoc(req.params.id, (err, success) => {
    if (err) {
      console.log(`error deleteing: ${err}`);
      res.sendStatus(404);
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
