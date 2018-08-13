const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index.js');

const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/activityInfo', (req, res) => {
  db.ActivityTimeSlots.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('DB ERROR', err);
    });
});

module.exports = app;