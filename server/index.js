const express = require('express');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');
let save = require('../database/index.js').save;
let getReposByUsername = require('../helpers/github.js').getReposByUsername;
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/repos', function(req, res) {
  // TODO - your code here!
  // console.log(req.body.user);
  getReposByUsername(req.body.user, (result) => result);

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // //* save the repo information in the database
  // var db = mongoose.connection;
  // //? Console.log errors when connecting to MongoDB
  // db.on('error', console.error.bind(console, 'connection error:'));
  // //? Once the connection to MongoDB is open run the following code
  // db.once('open', function() {
  //   // we're connected!
  //   //? Place data recieved from GitHub into database here
  // });
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  // var db = mongoose.connection;
  // //? Console.log errors when connecting to MongoDB
  // db.on('error', console.error.bind(console, 'connection error:'));
  // //? Once the connection to MongoDB is open run the following code
  // db.once('open', function() {
  //   // we're connected!
  //   //? Return top 25 repos (figure out how to get the "top 25" repos)
  // });
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
