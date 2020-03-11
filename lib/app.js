var express = require('express');
var cors = require('cors'); // Cors to send/receive data in JSON format
var path = require('path'); // To set the public path where the index.html is saved
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // To support JSON-encoded bodies
app.use(express.json()); // To support JSON-encoded bodies
var port = process.env.PORT || 3000; // Set the server port (to listen)
var clear = require('clear'); // To cleat screen
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

var config = require('config-json');
var mongoose = require('mongoose'); // Mongoose to communicate with the database

app.get('/hello', function(req, res) {
  var name = 'World';
  if (req.query.name && req.query.name != '') {
    name = req.query.name;
  }
  res.json({
    message: 'hello ' + name + '!'
  });
});

// **************************************************************************
// ************** Routes ****************************************************
//console.log(app);
require('./routes/poll')(app);

// **************************************************************************
// ************** Start *****************************************************
//clear(); //clear screen
console.log(' ***** Start session *** ');
console.log(' *****               *** ');
app.listen(port, function() {
  console.log('App started on port:', port);

  /*** Data Base ***/
  config.load('./config.json'); // Load DB logins and passwords

  var DBlogin = config.get('dbCredentials', 'DBlogin'); // Retrieve data from the config.json
  console.log(' ......App DBlogin ...... ', DBlogin);

  var DBpwd = config.get('dbCredentials', 'DBpwd'); // MongoBD's username and password
  console.log(' ......App DBpwd ...... ', DBpwd);

  var DBLink = config.get('BLink'); // MongoDB database link
  console.log(' ......App DBLink ...... ', DBLink);

  mongoose.connect('mongodb://' + DBlogin + ':' + DBpwd + DBLink, {
    useNewUrlParser: true
  }); //Connect to the database
  var db = mongoose.connection;

  console.log(' ....App  db JSON.stingyfire ....', db);

  db.on('error', console.error.bind(console, 'connection error:'));

  console.log(' ......App App before thje connection  ...... ');
  db.once('open', function() {
    console.log("App App App App App App we're connected to the data base :)");

    console.log(' ......App dbconnection ...... ');
  });
  console.log(' ......App After thje connection  ...... ');
});

module.exports = app; // Export the module
