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
require('./routes/poll')(app);

// **************************************************************************
// ************** Start *****************************************************
//clear(); //clear screen
console.log(' ***** Start session *** ');
console.log(' *****               *** ');
app.listen(port, function() {
  /*** Data Base ***/
  config.load('./config.json'); // Load DB logins and passwords

  var DBlogin = config.get('dbCredentials', 'DBlogin'); // Retrieve data from the config.json

  var DBpwd = config.get('dbCredentials', 'DBpwd'); // MongoBD's username and password

  var DBLink = config.get('BLink'); // MongoDB database link

  mongoose.connect('mongodb://' + DBlogin + ':' + DBpwd + DBLink, {
    useNewUrlParser: true
  }); //Connect to the database
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {});
});

module.exports = app; // Export the module
