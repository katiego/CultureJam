$(function() {
console.log('js works times 2');
//test data
// var songs = [
// 	{trackName: "Go Home", artist: "Lucius", country: "USA"},
// 	{trackName: "The Rip Tide", artist: "Beirut", country: "USA"}
// ];



// compile underscore templates
var resultsTemplate = _.template($('#searchResults-template').html());

/// on click events + show songs for selected country
$('#Japan').click(function(e) {
    e.preventDefault();// prevent the default anchor functionality
    console.log('japan click works');


    var targetCountry = 'Japan'

    $.get('/api/songs/' + targetCountry, function(allSongs) {
    $('#results-list').html('');
	_.each(allSongs, function(song, index) {
	  console.log(song);
	  
	  var $songHtml = $(resultsTemplate(song));
	  console.log($songHtml);
	  $('#results-list').append($songHtml);
	});
	});
});

$('#India').click(function(e) {
    e.preventDefault();// prevent the default anchor functionality
    console.log('inda click works');

    var targetCountry = 'India'

    $.get('/api/songs/' + targetCountry, function(allSongs) {
    $('#results-list').html('');
	_.each(allSongs, function(song, index) {
	  console.log(song);
	  
	  var $songHtml = $(resultsTemplate(song));
	  console.log($songHtml);
	  $('#results-list').append($songHtml);
	});
	});
});

$('#Colombia').click(function(e) {
    e.preventDefault();// prevent the default anchor functionality
    var targetCountry = 'Colombia'
    $.get('/api/songs/' + targetCountry, function(allSongs) {
    $('#results-list').html('');
	_.each(allSongs, function(song, index) {
	  // console.log(allSongs)
	  console.log(song);
	  
	  var $songHtml = $(resultsTemplate(song));
	  console.log($songHtml);

	  $('#results-list').append($songHtml);

	});
	});
});

$('#Germany').click(function(e) {
    e.preventDefault();// prevent the default anchor functionality
    console.log('Germany click works');

    var targetCountry = 'Germany'

    $.get('/api/songs/' + targetCountry, function(allSongs) {
    $('#results-list').html('');	
	_.each(allSongs, function(song, index) {
	  console.log(song);
	  
	  var $songHtml = $(resultsTemplate(song));
	  console.log($songHtml);
	  $('#results-list').append($songHtml);
	});
	});
});

$('#Kenya').click(function(e) {
    e.preventDefault();// prevent the default anchor functionality
    console.log('Kenya click works');

    var targetCountry = 'Kenya'

    $.get('/api/songs/' + targetCountry, function(allSongs) {
    $('#results-list').html('');
	_.each(allSongs, function(song, index) {
	  console.log(song);
	  
	  var $songHtml = $(resultsTemplate(song));
	  console.log($songHtml);
	  $('#results-list').append($songHtml);
	});
	});
});

// Playlist code

// test data
var users = [
	{id: 1, email: 'user1@testing.com', password: 'thiswillbeencripted', 
		songs: [
		{artist: "Andreas Bourani", trackName: "Auf uns", country: "Germany", link: "https://www.youtube.com/watch?v=MYNLQjrBVPo"},
		{artist: "Clean Bandit", trackName: "Rather Be ft. Jess Glynne", country: "Germany", link: "https://www.youtube.com/watch?v=m-M1AtrxztU"}
		]
	}];

// add new song via modal
$('#exampleModal').on('show.bs.modal', function (event) {
    console.log('show modal');
    });

$('#add-song').on('submit', function() {
var songArtist = $('#song-artist').val(); 
var songTrackName = $('#song-trackName').val();
var songCountry = $('#song-country').val();
var songLink = $('#song-link').val();
var songData = {artist: songArtist, trackName: songTrackName, country: songCountry, link: songLink}; 
console.log(songData); 

	$.post('/api/songs', songData, function(newSong){
	console.log(newSong); 
	});
$(this)[0].reset();	
});



//underscore tempalte
var playlistTemplate = _.template($('#playlist-template').html());

_.each(users, function(song, index) {
console.log(song);
var $song = $(playlistTemplate(song));
$song.attr('data-index', index);	  
$('#playlist').append($song);

// _.each(users, function(user, key, list) {
// 	var template = $("#playlist-template").html(); 
// 	$("#playlist").html(_.template(template, {users: users}));
// });
});
});

