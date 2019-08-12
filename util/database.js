const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://letswebtech:rhl2neOzmdarWBlh@cluster0-bs3pu.mongodb.net/firstApp?retryWrites=true'
  )
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
