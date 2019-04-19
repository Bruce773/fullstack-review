const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

let repoSchema = mongoose.Schema({
  // // TODO: your schema here!
  id: { type: Number, unique: true },
  name: String,
  fork: Boolean,
  date_created: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (reposArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let parsedData = JSON.parse(reposArray);
  parsedData.forEach(({ id, name, fork, date_created }) => {
    let repo = new Repo({ id, name, fork, date_created });
    repo.save((err, repo) => {
      err ? console.log(err) : console.log(repo);
    });
  });
};

module.exports.save = save;
