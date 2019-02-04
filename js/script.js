// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "99.9",
    "Brother",
    "PYNK",
    "Brujas"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above


var artists = [
    "Mob Choir",
    "Stuck in the Sound",
    "Janelle Monae",
    "Princess Nokia"
];

var images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXddhEHsHmTEDBDFqBQV0iKNh7yD5dqHbVW9uhdW2f6GXSPvHIVQ",
    "https://m.media-amazon.com/images/M/MV5BYWQwMTc4N2QtYTdjMy00YTZhLWJkNDAtMDk4YTIwYTQ3MTFiXkEyXkFqcGdeQXVyNjQzMjk4MDQ@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S3dIljSJQ-vGlHQsGN4BLyz7B0Sj9Hxu52Ks0jwCSUiphCiGhQ",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz-NS-rgwoJckiOmjbGBiREg1oQxJNA82Byueu6PJbJXU8UuhXA"
];

var links = [
    "https://www.youtube.com/watch?v=DpCfhRVqJWU",
    "https://www.youtube.com/watch?v=J417T5crtm4",
    "https://www.youtube.com/watch?v=PaYvlVR_BEc",
    "https://www.youtube.com/watch?v=iUcAPCxrSQs"
];

var lengths = [
    241,
    201,
    289,
    295
];



function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}

function addSongInfo(){
    var songName = $("#song").val();
    var artist = $("#artist").val();
    var image = $("#image").val();
    var video = $("#link").val();
    songs.push(songName);
    artists.push(artist);
    images.push(image);
    links.push(video);
    // BELOW write the code to add new items to each of the other arrays

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
