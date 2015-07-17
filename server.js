// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');





// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/projectOne');

var Song = require('./models/song');

// set up root route to respond with 'index.html'
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/api/songs', function (req, res) {
  Song.find(function (err, songs) {
    res.json(songs);
  });
});

app.get('/api/songs/:country', function(req, res) {
	var targetCountry = req.params.country
	console.log(targetCountry)

  // find item in database matching the id
  Song.find({country: targetCountry}, function(err, foundSong){
    console.log(foundSong);
    if(err){
      console.log("error: ", err);
      res.status(500).send(err);
    } else {
      // send back post object
      res.json(foundSong);
    }
  });

});


// listen on port 3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});