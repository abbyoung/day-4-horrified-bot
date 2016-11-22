var fs = require('fs'),
    path = require('path'),
    Twit = require('twit');

var config = {
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

var tweets = require('./tweets.json');
var T = new Twit(config);


function pickTweet(data){
  return data[Math.floor(Math.random()*data.length)];
}

var probability = Math.random();

if (probability > 0.96){
  console.log('will tweet');
  console.log(probability);

  T.post('statuses/update', {
    status: pickTweet(tweets.tweets)
  }, function(err, data, response){
    console.log(data);
  });
}
else {
  console.log('no tweet')
  console.log(probability);
}
