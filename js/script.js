// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Boo'd Up",
    "Nice For What",
    "Universe"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above


var artists = [
    "Ella Mai",
    "Drake",
    "EXO"
];

var images = [
    "https://rnbmain-thisisrnb.netdna-ssl.com/wp-content/uploads/2018/04/Ella-Mai-Bood-Up-Vid.jpg;maxHeight=145;maxWidth=222",
    "https://i.ytimg.com/vi/KRaPykuwCiw/maxresdefault.jpg;maxHeight=145;maxWidth=222",
    "https://kpopcolorcodedlyrics.files.wordpress.com/2012/01/exo.jpg?w=809;maxHeight=145;maxWidth=222"
];

var links = [
    "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
    "https://www.youtube.com/watch?v=KRaPykuwCiw",
    "https://www.youtube.com/watch?v=leu-cTvMWTA"
];

var lengths = [
    241,
    201,
    289
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
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
