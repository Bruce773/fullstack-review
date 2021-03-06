const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

let repoSchema = mongoose.Schema({
  // // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  fork: Boolean,
  created_at: String,
  html_url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let returnTopTwentyFive = (cb) => {
  Repo.find({})
    .sort('-created_at')
    .exec((err, result) => (err ? console.log(err) : cb(result)));
};

let save = (reposArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let parsedData = JSON.parse(reposArray);
  // console.log(parsedData);
  parsedData.forEach(({ id, name, fork, created_at, html_url }) => {
    let repo = new Repo({ id, name, fork, created_at, html_url });
    console.log(html_url);
    repo.save((err, repo) => {
      err ? console.log(err) : console.log(repo);
    });
  });
};

module.exports.save = save;
module.exports.returnTopTwentyFive = returnTopTwentyFive;
