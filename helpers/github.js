const request = require('request');
var rp = require('request-promise');
const config = require('../config.js');

let getReposByUsername = (term, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${term}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`,
    },
  };

  rp(options)
    .then((result) => cb(result))
    .catch((err) => err);
};

module.exports.getReposByUsername = getReposByUsername;
