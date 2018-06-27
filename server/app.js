const express = require('express');
const app = express();
const path = require('path')
const db = require('./db');

db.sync()

app.use('/dist', express.static(path.join(__dirname, '../client/dist')))
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

module.exports = app;
