$(function() {
console.log('js works times 2');
//test data
// var songs = [
// 	{trackName: "Go Home", artist: "Lucius", country: "USA"},
// 	{trackName: "The Rip Tide", artist: "Beirut", country: "USA"}
// ];

// compile underscore template
var resultsTemplate = _.template($('#searchResults-template').html());

/// on click event for boostrap selector to set targetCountry to selected country



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
	  // console.log(song);
	  
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

});

   


