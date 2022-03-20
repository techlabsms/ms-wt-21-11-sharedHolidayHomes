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
  const minPrice = parseInt(req.query.minPrice);
  const maxPrice = parseInt(req.query.maxPrice);
  const place = req.query.place;
  if (
    minPrice < 0 ||
    maxPrice < 0 ||
    maxPrice < minPrice ||
    (isNaN(minPrice) && !isNaN(maxPrice)) ||
    (!isNaN(minPrice) && isNaN(maxPrice))
  ) {
    res.status(400).send('Invalid minimum or maximum price parameters');
    return;
  }

  const collection = client.db().collection('sandbox');
  collection.find({}).toArray(function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send('Error fetching houses!');
    } else {
      let filteredResult = result;
      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        filteredResult = filteredResult.filter(
          (house) =>
            house.priceInEuro / house.totalShares >= minPrice &&
            house.priceInEuro / house.totalShares <= maxPrice
        );
      }

      if (place !== '' && place !== undefined && place !== null) {
        filteredResult = filteredResult.filter(
          (house) => house.address.country.toUpperCase() === place.toUpperCase()
        );
      }
      res.json(filteredResult);
    }
  });
});

app.get('/houseDetail/:id', (req, res) => {
  const collection = client.db().collection('sandbox');
  collection.find({}).toArray(function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send('Error fetching houses!');
    } else {
      let filteredResult = result;
      filteredResult = filteredResult.filter(
        (house) => String(house._id) === req.params.id
      );
      res.json(filteredResult);
    }
  });
});

app.listen(apiPort, () => {
  console.log(`server running on port ${apiPort}`);
});
