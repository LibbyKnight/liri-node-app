
//records user input
var userinput = process.argv[2];
 //keys
var keys = require('./keys.js');

//modules
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
var fs = require('fs'); 
 
//twitter app
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

//spotify app
function spotifyThis() {


	var userSong = process.argv[3];

	if (userSong === undefined) {
			userSong = 'The Sign by Ace of Base';
		}
 
	spotify.search({ type: 'track', query: userSong }, function(err, data) {
		  
    if ( err ) {
        console.log('Error occurred: ' + err);

        return;
    } else {
	    	console.log('Artist: ', data.tracks.items[0].artists[0].name);
	    	console.log('Song Name: ', data.tracks.items[0].name);
	    	console.log('Preview Link: ', data.tracks.items[0].preview_url);
	    	console.log('Album: ', data.tracks.items[0].album.name);    
		}
 	})
};

//omdb app
function movie() {

	var userMovie = process.argv[3];

	if (userMovie === undefined) {
			userMovie = 'Mr. Nobody';
		}

	var queryUrl = "http://www.omdbapi.com/?t=" + userMovie + "&y=&plot=full&tomatoes=true&r=json";

	request(queryUrl, function (error, response, body) {
	  
	  if (!error) {

	    console.log('Title: ' + JSON.parse(body).Title);
	    console.log('Year: ' + JSON.parse(body).Year);
	    console.log('Rated: ' + JSON.parse(body).Rated);
	    console.log('IMDB Rating: ' + JSON.parse(body).imdbRating);
	    console.log('Country: ' + JSON.parse(body).Country);
	    console.log('Language: ' + JSON.parse(body).Language);
	    console.log('Plot: ' + JSON.parse(body).Plot);
	    console.log('Actors: ' + JSON.parse(body).Actors);
	   	console.log('Rotten Tomatoes Rating: ' + JSON.parse(body).tomatoRating);
	    console.log('Rotton Tomatoes URL: ' + JSON.parse(body).tomatoURL);
	  }
	});
}



//user arguments
if (userinput === "my-tweets") {

	twitter();
} else if (userinput === "spotify-this-song") {

	spotifyThis();
} else if (userinput === "movie-this") {
	movie();
}	

