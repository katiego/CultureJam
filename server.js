// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    salt = bcrypt.genSaltSync(10),
    session = require('express-session');    

mongoose.connect(
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/projectOne' // plug in the db name you've been using
);

// set session options
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperSecretCookie',
  cookie: { maxAge: 600000 }
}));



// tell app to use bodyParser middleware
app.use(bodyParser.urlencoded({extended: true}));

// serve js and css files from public folder
app.use(express.static(__dirname + '/public'));

var Song = require('./models/song');
// var User = require('./models/user');
var User = require('./models/user');



// middleware to manage sessions
// custom middleware to manage our sessions
app.use('/', function (req, res, next) {
  // saves userId in session for logged-in user
  req.login = function (user) {
    req.session.userId = user._id;
  };

  // finds user currently logged in based on `session.userId`
  req.currentUser = function (callback) {
    User.findOne({_id: req.session.userId}, function (err, user) {
      req.user = user;
      callback(null, user);
    });
  };

  // destroy `session.userId` to log out user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  };

  next();  // required for middleware
});

// set up root route to respond with static files
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.get('/signup', function (req, res) {
  res.sendFile(__dirname + '/public/views/signup.html');
});

app.get('/login', function (req, res) {
  res.sendFile(__dirname + '/public/views/login.html');
});


// create new user with secure password
app.post('/api/users', function (req, res) {
  console.log("server received signup form data: ", req.body.user);
  var newUser = req.body.user;
  User.createSecure(newUser, function (err, user) {
    // log user in automatically when created
    req.login(user);
    res.redirect('/');
  });
});



//authenticate the user
app.post('/login', function (req, res) {
  console.log("server received login form data: ", 
    req.body.user.email, req.body.user.password);
  // server's version of userData
  var userData = {
    email: req.body.user.email,
    password: req.body.user.password
  };
  User.authenticate(userData.email, userData.password, function (err, user) {
    if (user){
      req.login(user);
      //res.redirect('/profile');

      console.log("logged in")
      res.redirect('/');
    } else {
      res.status(500).send(err);
    }
  });
});


// see who current user is 
app.get("/currentuser", function(req, res){
  req.currentUser(function (err, user){
    res.json(user); 
  }); 
});

//logout user
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/"); 
})

//view all song data 
app.get('/api/songs', function (req, res) {
  Song.find(function (err, songs) {
    res.json(songs);
  });
});

//add song  
app.post('/api/songs', function (req, res) {
  var newSong = new Song({
    artist: req.body.artist,
    trackName: req.body.trackName,
    country: req.body.country, 
    link: req.body.link
  });
console.log(newSong)
  // save new phrase in db
  newSong.save(function (err, savedSong) {
    res.json(savedSong);
  });
});

//get songs by country
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

//view all users
app.get('/api/users', function(req, res) {
  User.find(function (err, users) {
    res.json(users);
    }); 
}); 

// user routes to add song to user's song array
app.put('/currentuser/songs/:songId', function(req, res) {
  var songId = req.params.songId
  Song.findOne({_id: songId}, function (err, foundSong){
  // console.log('found song: ', foundSong);

    req.currentUser(function (err, user){
     if(err){
        console.log("error: ", err);
        res.status(500).send(err);
      } else {


      User.findOne({_id: user._id}, function (err, foundUser) {
        console.log('found user: ', foundUser);
          foundUser.songs.push(foundSong); 
          foundUser.save()
          console.log(foundUser)
          res.json(foundSong)
      });
      }
    }); 
  });
});

app.delete('/currentuser/songs/:songId', function (req, res) {
  
var songId = req.params.songId
  Song.findOne({_id: songId}, function (err, foundSong){
  console.log('found song to delete: ', foundSong);

    req.currentUser(function (err, user){
     if(err){
        console.log("error: ", err);
        res.status(500).send(err);
      } else {


      User.findOne({_id: user._id}, function (err, foundUser) {
        console.log('found user: ', foundUser);

      // get the index of the found item
      var index = foundUser.songs.indexOf(foundSong);
      console.log('index of song: ', index)
//THIS DOESNT WORK - NOT FINDING RIGHT INDEX
      // remove the item at that index, only remove 1 item
      foundUser.songs.splice(index, 1);
      foundUser.save()

      // send back deleted object
      res.json(foundSong)
      });
      }
    }); 
  });
});

// listen on port 3000
app.listen(process.env.PORT || 3000);