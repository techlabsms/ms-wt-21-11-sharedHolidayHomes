const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const packageInfo = require('./package.json');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const apiPort = 5000;
const uri =
  'mongodb+srv://mongoarmin:mDQp1sADRbinJ5kv@sharedholidayhomesclust.nlkm6.mongodb.net/shared-holiday-homes-db?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  // const collection = client.db().collection('sandbox');
  // console.log(collection);
  // client.close();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({
    version: packageInfo.version,
  });
});

app.get('/houses', (req, res) => {
  const minPrice = parseInt(req.query.minPrice ?? -1);
  const maxPrice = parseInt(req.query.maxPrice ?? -1);
  if (minPrice < 0 || maxPrice <= 0 || minPrice > maxPrice) {
    res.status(400).send('Invalid minimum or maximum price parameters');
    return;
  }
  //implement user dates for budget and MongoDB here!
  //implement user dates place here
  const collection = client.db().collection('sandbox');
  collection.find({}).toArray(function (err, result) {
    if (err) {
      res.status(400).send('Error fetching houses!');
    } else {
      res.json(result);
    }
  });
});

app.listen(apiPort, () => {
  console.log(`server running on port ${apiPort}`);
});
