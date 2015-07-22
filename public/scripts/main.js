$(function() {
console.log('js works');

//underscore tempalte
var playlistTemplate = _.template($('#playlist-template').html());

// compile underscore template for song search
var resultsTemplate = _.template($('#searchResults-template').html());


//check and change login message
$.get('/currentuser', function(response){
	//server responds with the current user
	if (response === null){
		//no one logged in
		$("#loggedInMessage").html("you're not logged in"); 
	} else {
		//someone is logged in 
		$("#loggedInMessage").html("you're logged in as " + response.email); 
		var songs = response.songs
		console.log(songs)
		_.each(songs, function(song, index) {
	  		console.log(song);
	  
		  var $songHtml = $(playlistTemplate(song));
		  console.log($songHtml);
		  $('#playlist').append($songHtml);
	});
	};
});

 //click star, add song to current user's playlist
$('#results-list').on('click', '.icon-star', function(e) {
    console.log('star works', $(this).closest("li").attr('data-id'));
    var songId = $(this).closest("li").attr('data-id');
    console.log(songId);
    
	$.ajax({
        type: 'PUT',
        url: '/currentuser/songs/' + songId,
        success: function(data) {
          var song = data;
          console.log('found data: ', song)
      		
      	$('#playlist').append(playlistTemplate(song))
     
      }
    });
});


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



});



