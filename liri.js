
//records user input
var userInput = process.argv[2];
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

//liri do what it says
function liriDoes() {

	fs.readFile("random.txt", "utf8", function(error, data) {
		console.log(data);
		
		
		userSong = data.split(',')[3];
		spotifyThis();
		

	})
};

//liri log user input- bonus
function liriWrites() {

	var input= process.argv[2] && process.argv[3];

	fs.appendFile("log.txt", userInput + ", " + "\r\n", function(err) {

  if (err) {
    return console.log(error);
  	};
});
}


//user arguments
if (userInput === "my-tweets") {

	twitter();
} else if (userInput === "spotify-this-song") {
	spotifyThis();
} else if (userInput === "movie-this") {
	movie();
} else if (userInput === "do-what-it-says") {
	liriDoes();
};

liriWrites();
