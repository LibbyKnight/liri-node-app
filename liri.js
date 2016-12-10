
//records user input
var userinput = process.argv[2];

//twitter
var Twitter = require('twitter');
 //keys
var keys = require('./keys.js');

var request = require('request');

var fs = require('fs'); 
 

 function tweets() {

 var client = new Twitter(keys.twitterKeys);

 var params = {screen_name: 'aimanknight', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	
     for (var i = 0; i < tweets.length; i++) {
            console.log((parseInt([i]) + 1) + '. ' + tweets[i].text);
        }
  }
})

};

if (userinput === "my-tweets") {

	tweets();
};

// 	else if (userinput === "spotify-this-song") {


// 	}


