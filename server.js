const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

export default app;