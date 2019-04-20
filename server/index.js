let returnTopTwentyFive = require('../database/index.js').returnTopTwentyFive;
let getReposByUsername = require('../helpers/github.js').getReposByUsername;
let save = require('../database/index.js').save;
const bodyParser = require('body-parser');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/repos', function(req, res) {
  // TODO - your code here!
  getReposByUsername(req.body.user, (result) => {
    // Use save to save the data in the database
    save(result);
    res.send({ data: result });
  });
});

app.get('/repos', function(req, res) {
  // TODO - your code here!
  returnTopTwentyFive((result) => {
    res.send({ data: result });
  });
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
