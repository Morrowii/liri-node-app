
var fs = require('fs');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
require("dotenv").config();
var keys = require('./keys.js');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var input = [];
input.push(process.argv[2]);
input.push(process.argv[3]);

function LIRI() {

  if (input[0] === 'my-tweets') {
      client.get('statuses/user_timeline', function(error, tweets, response) {
          if (!error) {
            for (var i = 0; i < tweets.length; i++) {
              console.log(tweets[i].created_at + ': ' + tweets[i].text);
            };
          }
      });
  }
  else if (input[0] === 'spotify-this-song') {
      var song = 'The Sign - Ace of Base';
      if (input[1]) {
        song = input[1];
      }
      spotify.search({ type: 'track', query: song }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log('Song: ' + data.tracks.items[0].name);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('Artist: ' + data.tracks.items[0].artists[0].name);
        console.log('Preview: ' + data.tracks.items[0].preview_url);
      });
  }
  else if (input[0] === 'movie-this') {
      var movie = 'Mr. Nobody';
      if (input[1]) {
        movie = input[1];
      }
      request('https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        var info = JSON.parse(body);
        console.log('Title: ' + info.Title);
        console.log('Year: ' + info.Year);
        console.log('Rated: ' + info.Rated);
        console.log('Rotted Tomatoes: ' + info.Ratings[1].Value);
        console.log('Country: ' + info.Country);
        console.log('Language: ' + info.Language);
        console.log('Plot: ' + info.Plot);
        console.log('Actors: ' + info.Actors);
      });
  }
  else if (input[0] === 'do-what-it-says') {
      fs.readFile('random.txt', 'UTF8', function(err, data) {
        if (err) {
          throw err;
        }
        else {
          input = data.split(',');
          LIRI();
        }
      });
  }

}

LIRI();