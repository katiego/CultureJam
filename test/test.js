var request = require('request'),
    expect = require('chai').expect,
    baseUrl = 'http://localhost:3000';


 describe("Testing app functionality", function(){


   it("Should successfully get users", function(done) {
    request(baseUrl + '/api/users', function(err, res, body) {
    expect(res.statusCode).to.equal(200);
     done();
       });
   });


   it("Should successfully get songs", function(done){
     request('http://localhost:3000/api/songs', function(err, res, body) {
     expect(res.statusCode).to.equal(200);
     done();
       });
   });

   it("Should get the target country's songs", function(done){
     request('http://localhost:3000/api/songs/India', function(err, res, json) {
     json = JSON.parse(json) 
     console.log('we are getting console from test', json[0].country);
     // expect(res.statusCode).to.equal(200);
     expect(json[0].country).to.equal("India");
     done(); 
     }); 
 	});
//stopped here
   it("Should login the user", function(done){
     request.post('http://localhost:3000/login', function(err, res, json) {   
     expect(res.statusCode).to.equal(500);
     done(); 
   });
  });

   it("Should logout the user", function(){
     request('http://localhost:3000/logout', function(err, res, body) {
     expect(res.statusCode).to.equal(500);
     done(); 
   });
  });

	it("Should add the song to the array songs", function(){
     request('http://localhost:3000/api/songs', function(err, res, body) {
     expect(res.statusCode).to.equal(500);
     done(); 
   });
  });
}); 

