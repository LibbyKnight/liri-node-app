
//records user input
var userinput = process.argv[2];

//twitter
var Twitter = require('twitter');
 //keys
var keys = require('./keys.js').keys.twitterKeys;
 

 function tweets() {

 var client = new Twitter(keys.twitterKeys);

 var params = {screen_name: 'aimanknight', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
})
// };


// tweets();

// if (userinput === "my-tweets") {

// 	tweets();
// };

// 	else if (userinput === "spotify-this-song") {


// 	}


