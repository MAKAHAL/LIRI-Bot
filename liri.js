require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var fs= require("fs");

var spotify = new Spotify(keys.spotify);
//Client ID: bf77e724e34e4b2bb9cb00bfba496481 
// the i have to add Artist(s)

//The song's name

//A preview link of the song from Spotify

//The album that the song is from
var getArtistName = function(artist) {
    return artist.name;
  };
  var getMeSpotify = function(songName) {
    if (songName === undefined) {
      songName = " I Want it That Way";
    }

// i don't know what to do next. im still working on it. 










}