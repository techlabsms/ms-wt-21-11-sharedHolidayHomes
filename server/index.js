const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const packageInfo = require('./package.json');
const mockData = require('./mock.housecollection.json');
const app = express();
const apiPort = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    version: packageInfo.version,
  });
});

app.get('/houses', (req, res) => {
  res.send(mockData);
});

app.listen(apiPort, () => {
  console.log(`server running on port ${apiPort}`);
});
