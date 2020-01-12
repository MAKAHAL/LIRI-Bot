require("dotenv").config();
var axios = require("axios");

var keys = require("./keys");

var Spotify = require("node-spotify-api");
var fs= require("fs");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);
function runLiri() {
  switch (userCommand) {
    case  "spotify-this-song":


//first thing is the artist name
var getArtistIdByName = function getArtistIdByName(artistName) {
  return this.search(artistName);
};

//then the song

var getSong = function getSong(song) {
  if (songName === undefined) {
    songName = "What's my age again";
  }
  spotify.search(
    {
      type: "track",
      query: song
    })
//two random songs 
  spotifyApi.getAudioFeaturesForTracks(['4iV5W9uYEdYUVa79Axb7Rh', '3Qm86XLflmIXVm1wcwkgDK'])
  .then(function(data) {
    console.log(data.body);
  }, function(err) {
    done(err);
  });
  var songs = data.tracks.items;
  for (var i = 0; i < songs.length; i++) {
    console.log(i);
    console.log("artist(s): " + songs[i].artists.map(getArtistByName));
    console.log("song name: " + songs[i].name);
    console.log("preview song: " + songs[i].preview_url);
    console.log("album: " + songs[i].album.name);
 
  break;
};
switch (userCommand){

case "movie-this":
//movie-this
var getMeMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  var urlHit ="http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=trilogy";

 request(queryUrl, function (error, response, jsonData) {

 if (!error && response.statusCode === 200) {
  var jsonData = JSON.parse(jsonData);

  console.log("Title: " + jsonData.Title);
  console.log("Year: " + jsonData.Year);
  console.log("Rated: " + jsonData.Rated);
  console.log("IMDB Rating: " + jsonData.imdbRating);
  console.log("Country: " + jsonData.Country);
  console.log("Language: " + jsonData.Language);
  console.log("Plot: " + jsonData.Plot);
  console.log("Actors: " + jsonData.Actors);
  console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
 }
else{
  console.log("error  can't find what you're looking for ")
}

break;
 if ( userCommand=="doWhatItSays"){  fs.readFile("random.txt", "utf8", function (error, data) {
  if (error) {
      return console.log(error)}
      else{console.log("LIRI doesn't know that") }
  

 });
 var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};
 runThis(process.argv[2], process.argv.slice(3).join(" "));

 

switch(casedata){
  case " concert-this":
    var getMyBands = function(artist) {
      var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
}
break;

}









}
 });
 
}
}
}
}
}
