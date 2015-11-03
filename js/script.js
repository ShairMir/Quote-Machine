// var quotes = [
//     "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
//     "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
//     "If I'm not back in 5 minutes....Just wait longer." 
// ];

// var writers = [
// 	"Sirius Black",
// 	"Tyrion Lannister",
// 	"Ace Ventura"
// ];

var quotes = [
  { 'author': '- Tyrion Lannister', 'quote': 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.', 'img': 'http://jennifermelzer.com/wp-content/uploads/2013/12/tyrion.jpg'},
  { 'author': '- Bran Stark', 'quote': 'Sometimes old nan would tell the same story she&#39d told before, but we never minded. Old stories are like old friends, she used to say. You have to visit them from time to time.', 'img': 'http://img0.gtsstatic.com/wallpapers/560d85d94549198b5d37918116c8b5af_large.jpeg'},
  { 'author': '- Daenerys Targaryen', 'quote': 'I am a Khaleesi of the Dothraki. I am the wife of the great Kahl and I carry his son inside me. The next time you raise a hand to me will be the last time you have hands.', 'img': 'http://images6.fanpop.com/image/photos/33800000/daenerys-house-targaryen-33827799-1600-1200.jpg'},
  { 'author': '- Arya Stark', 'quote': 'Swift as a deer. Quiet as a shadow. Fear cuts deeper than swords.', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-02.jpg'},
  { 'author': '- Jon Snow', 'quote': 'I want to fight for the side that fights for the living.', 'img': 'http://p1.pichost.me/i/70/1945446.jpg'},
	{ 'author': '- Joffrey Baratheon', 'quote': 'I&#39ll give him a red smile. From ear to ear. ', 'img': 'http://staticpopopics.popopics.com/uploads/original/hbo-drama-game-of-thrones-season-3-hd-characters-wallpaper-1600x1200-08-01.jpg'},
	{ 'author': '- Cersei Baratheon', 'quote': 'Whenever you play the game of thrones, you win or you die...', 'img': 'http://www.moviedeskback.com/wp-content/uploads/2013/03/Game-of-Thrones-season-3-wallpaper-Cersei.jpg'},
	{ 'author': '- Sansa Stark', 'quote': 'My skin has turned to porcelein, to ivory, to steel.', 'img': 'http://www.moviemarkers.net/wp-content/uploads/2013/03/got-s3-sansa-wallpaper-1600.jpg'},
	{ 'author': '- Jamie Lannister', 'quote': 'Tell me, if I stabbed the Mad King in the belly instead of the back, would you admire me more?', 'img': 'http://www.gameofthroneswallpaper.net/wp-content/uploads/2014/07/Jamie-Lannister-Game-of-Thrones.jpg'},
	{ 'author': '- Robb Stark', 'quote': 'Tell Lord Tywin winter is coming for him. Twenty thousand northerners marching south to find out if he really does shit gold.', 'img': 'http://vignette2.wikia.nocookie.net/gameofthrones/images/1/1b/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-09.jpg/revision/latest?cb=20130603061845'}
];

console.log(quotes[0]['author']);

var new_random, old_random;
function random_num() {
  return Math.floor((Math.random() * quotes.length));
}

$(document).ready(function() {
  $('.quoteButton').on('click', function() {
    new_random = random_num(); // create random number
    while (new_random == old_random) { // check if old and new number is equal
      new_random = random_num(); // if equal generate new number
    }
    $('.quote').html(quotes[new_random]['quote']);
    $('.writer').html(quotes[new_random]['author']);
    $('img').attr('src', quotes[new_random]['img']);
    old_random = new_random;
  }); 
});

