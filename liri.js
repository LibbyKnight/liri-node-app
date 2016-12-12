
//records user input
var userinput = process.argv[2];

//twitter
var Twitter = require('twitter');

var spotify = require('spotify');
 //keys
var keys = require('./keys.js');

var request = require('request');

var fs = require('fs'); 
 
//twitter
 function twitter() {

 var client = new Twitter(keys.twitterKeys);

 var params = {screen_name: 'aimanknight', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

     for (var i = 0; i < tweets.length; i++) {
            console.log((parseInt([i]) + 1) + '. ' + tweets[i].text);
            console.log(tweets[i].created_at);
        }
  }
})

};


function spotifyThis() {


	var userSong = process.argv[3];

	if (userSong === undefined) {
			userSong = 'The Sign by Ace of Base';
		}
 
	spotify.search({ type: 'track', query: userSong }, function(err, data) {
		  // console.log(data)
    if ( err ) {
        console.log('Error occurred: ' + err);

        return;
    } else {

    		var data = data.tracks.items;

			for (var i = 0; i < data.length; i++) {
	    	console.log('Artist: ', data[i].artists.name);
	    	console.log('Song Name: ', data[i].name);
	    	console.log('Preview Link: ', data[i].preview_url);
	    	console.log('Album: ', data[i].album.name);
	    }
	}
 })
    
};



//user arguments
if (userinput === "my-tweets") {

	twitter();
} else if (userinput === "spotify-this-song") {

	spotifyThis();


	}


