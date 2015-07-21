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
	{email: 'user1@testing.com', password: 'thiswillbeencripted', 
		playlist: [
		{artist: "Andreas Bourani", trackName: "Auf uns", country: "Germany", link: "https://www.youtube.com/watch?v=MYNLQjrBVPo"},
		{artist: "Clean Bandit", trackName: "Rather Be ft. Jess Glynne", country: "Germany", link: "https://www.youtube.com/watch?v=m-M1AtrxztU"}
		]
	}];

// var users = [
// 	{artist: "Andreas Bourani", trackName: "Auf uns", country: "Germany", link: "https://www.youtube.com/watch?v=MYNLQjrBVPo"},
// 	{artist: "Clean Bandit", trackName: "Rather Be ft. Jess Glynne", country: "Germany", link: "https://www.youtube.com/watch?v=m-M1AtrxztU"}
// ]


//underscore tempalte
var userTemplate =  _.template($('#user-template').html()),
var playlistTemplate = _.template($('#playlist-template').html());

_.each(users, function(songHtml, index) {
console.log(songHtml);
var $songHtml = $(playlistTemplate(songHtml));
$songHtml.attr('data-index', index);	  
$('#playlist').append($songHtml);
_.each(post.comments, function(comment) {

$('#comment-display-' + comment.postId).append(postController.commentTemplate(comment));
	});



});

   


