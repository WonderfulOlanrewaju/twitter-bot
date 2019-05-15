console.log ("tweeter bot engine is about to start!!!");
require('dotenv').config();
const Twit = require("twit");
const config = require('./config')
const T = new Twit(config);

// Object for tweet search parameters
const searchParams = {
        q: '@BoyePanthera since:2018-07-11',
        count: 4
    } 

// Route for searching tweets with search parameters
T.get('search/tweets',searchParams, foundStatus)

// FoundStatus Callback function
function foundStatus (err, data, response) {
    try {
        // saving the data.statuses array into a single variable
        twitterTexts = data.statuses;
        // looping through to print each tweet status data found on twitter after search
        twitterTexts.forEach(function (twitterText) {
            console.log(twitterText.text + " end of tweet")
        });
    }
    catch (err) {
        console.log(err + ' something went wrong!')
    }      
}
