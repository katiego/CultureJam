var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SongSchema = new Schema({
  artist: String,
  trackName: String,
  country: String
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;