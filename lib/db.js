var config = require('config-json');
var mongoose = require('mongoose'); // Mongoose to communicate with the database

/*** Data Base ***/
config.load('./config.json'); // Load DB logins and passwords

var DBlogin = config.get('dbCredentials', 'DBlogin'); // Retrieve data from the config.json
console.log(' ......DBlogin ...... ', DBlogin);

var DBpwd = config.get('dbCredentials', 'DBpwd'); // MongoBD's username and password
console.log(' ......DBpwd ...... ', DBpwd);

var DBLink = config.get('BLink'); // MongoDB database link
console.log(' ......DBLink ...... ', DBLink);

mongoose.connect('mongodb://' + DBlogin + ':' + DBpwd + DBLink, {
  useNewUrlParser: true
}); //Connect to the database
var db = mongoose.connection;

console.log(' .... db JSON.stingyfire ....', db);

db.on('error', console.error.bind(console, 'connection error:'));

console.log(' ......before thje connection  ...... ');
db.once('open', function() {
  console.log("we're connected to the data base :)");

  console.log(' ......dbconnection ...... ');
});
console.log(' ......After thje connection  ...... ');

// 1. Define the structure of the document: properties and the type of data
var Schema = mongoose.Schema;
var pollsSchema = new Schema({
  name: String,
  answers: []
});
// 2. Create a function constructor to generate mongDB objects to stor data in the MongoDB
var Polls = mongoose.model('Person', pollsSchema);
console.log(' .... Polls ... ', Polls);

const getData = name =>
  new Promise((resolve, reject) => {
    Polls.findOne(
      {
        name
      },
      function(err, docs) {
        console.log(' ....... DB: getData ...... ');
        console.log(' ....... err: ', err);
        console.log(' ....... docs: ', docs);
        // Find the object in the DB
        if (err) return reject(err);
        else return resolve(docs);
      }
    );
  });

module.exports = getData;
