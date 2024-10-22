const path = require("path");
const express = require('express');

const PORT = 3006;
const app = express();

const buildPath = path.join(__dirname, "../build")

app.use('/', express.static(buildPath));

app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(buildPath, 'index.html'));
});

app.listen(PORT);