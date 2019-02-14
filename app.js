console.log("hello");

$("#close").hide();

$("#reelbut").on('click', function(){
    $(".jumbotron").html('<div class="video"><iframe src="https://player.vimeo.com/video/279542470" width="640" height="272" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>');
    $("#close").show();
    $("#projects").hide();
    $("#reelbut").hide();
});

$("#close").on('click', function(){
    $("#close").hide();
    $("#projects").show();
    $("#reelbut").show();
    $(".jumbotron").html('<h1 class="display-4">Sound Design & Re-Recording Mixing</h1></div><div id = "str"></div');
    $("#str").html("<p id='after'>Sound is the puppet master of emotion. Let's make your audience  <i id='feel'>feel</i>&nbspyour story.</p>");
});

setTimeout(function(){
    $("#str").fadeOut( "slow" );
}, 6000);

setTimeout(function(){
    $("#str").html("<p id='after'>Sound is the puppet master of emotion. Let's make your audience  <i id='feel'>feel</i>&nbspyour story.</p>")
    $("#str").fadeIn( "slow" );
}, 6500);

var string = "Sound is the puppet master of emotion. Let’s make your audience feel your story.";

var str = string.split("");

var el = document.getElementById('str');


(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 65);
})();

    