const express = require('express');
const app = express();
const db = require('./server/db');

db.sync()


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`) );
