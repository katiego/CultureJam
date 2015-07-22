var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: String, 
  email: String, 
  passwordDigest: String, 
  songs: {
	  artist: String,
	  trackName: String,
	  country: String, 
	  link: String }
});

var User = mongoose.model('User', UserSchema);
module.exports = User;