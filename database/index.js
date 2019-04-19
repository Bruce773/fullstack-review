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

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
};

module.exports.save = save;
