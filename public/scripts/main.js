$(function() {
console.log('js works');
//test data
var songs = [
	{trackName: "Go Home", artist: "Lucius", country: "USA"},
	{trackName: "The Rip Tide", artist: "Beirut", country: "USA"}
];

// compile underscore template
var resultsTemplate = _.template($('#searchResults-template').html());

_.each(songs, function (song, index) {
  var $song = $(resultsTemplate(song));
  $song.attr('data-index', index);
  $('#results-list').append($song);
});


});