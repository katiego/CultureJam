var request = require('request'),
    expect = require('chai').expect


 describe("Testing app functionality", function(){


   it("Should successfully get users", function() {
     request('http://localhost:3000/api/users', function(err, res, body) {
       expect(users).to.exist;
     done();
       });
   });

   it("Should successfully get songs", function(){
     request('http://localhost:3000/api/songs', function(err, res, body) {
       expect(songs).to.exist;
       done(); 
 		});
   });

   it("Should get the target country's songs", function(){
     request('http://localhost:3000/api/songs/Japan', function(err, res, json) {
     app.get();
     res.json.expect(songs.country).equal({country: "Japan"});
     done(); 
     }); 
 	});

   it("Should login the user", function(){
     request('http://localhost:3000/login', function(err, res, body) {
     var currentuser;
     app.post();   
     expect(currentuser).should.not.equal(null);
     done (); 
     }); 
   });

   it("Should logout the user", function(){
     request('http://localhost:3000/logout', function(err, res, body) {
     var currentuser;
     app.get();   
     expect(currentuser).should.equal(null);
     console.log(currentuser);
     done (); 
     });
   });

	it("Should add the song to the array songs", function(){
     request('http://localhost:3000/api/songs', function(err, res, body) {
     var songLength = songs.length	
     app.post();   
     expect(songs.length).equal(songLength + 1);
     done (); 
	 });
    });
}); 

