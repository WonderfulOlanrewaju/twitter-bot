console.log("tweeter tweet bot engine is about to start!!!");
require('dotenv').config();
const Twit = require("twit");
// importing API keys from config file
const config = require('./config')
// creating the Tweet bot with imported API keys from config file
const T = new Twit(config);

// Calling the tweet function and automating it every 1 minute
tweetIt ()
setInterval(tweetIt, 1000*60);

// Tweet function containing post route and its callback function
function tweetIt () {
    var N = Math.floor(Math.random ()*10);
    // Object for text to Uploading to the twitter API
    const tweet = {
        status: 'hello world!, happily coding my ' + N +'th project all thanks to coder @BoyePanthera'
    }
    // Route for Posting tweet to twitter
    T.post('statuses/update', tweet, tweetedTweet)
    // Callback function for uploaded tweets
    function tweetedTweet(err, data, response) {
        try {
            console.log('Tweet uploaded successfully!')
        } catch (err) {
            console.log('Something went wrong...see error message ' + err)
        }
    }
}