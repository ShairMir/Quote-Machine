var quotes = [
  { 'author': '- Tyrion Lannister', 'quote': 'Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.', 'img': 'http://jennifermelzer.com/wp-content/uploads/2013/12/tyrion.jpg'},
  { 'author': '- Tyrion Lannister', 'quote': 'My brother has his sword, and I have my mind. A mind needs books like a sword needs a whetstone to keep its edge.', 'img': 'http://jennifermelzer.com/wp-content/uploads/2013/12/tyrion.jpg'},
  { 'author': '- Tyrion Lannister', 'quote': '[about Joffrey] We&#39ve had vicious kings, and we&#39ve had idiot kings, but I don&#39t know if we&#39ve ever been cursed with a vicious idiot for a king.', 'img': 'http://jennifermelzer.com/wp-content/uploads/2013/12/tyrion.jpg'},
  { 'author': '- Bran Stark', 'quote': 'Sometimes old nan would tell the same story she&#39d told before, but we never minded. Old stories are like old friends, she used to say. You have to visit them from time to time.', 'img': 'http://img0.gtsstatic.com/wallpapers/560d85d94549198b5d37918116c8b5af_large.jpeg'},
  { 'author': '- Bran Stark', 'quote': 'A Stark needs only a direwolf.', 'img': 'http://img0.gtsstatic.com/wallpapers/560d85d94549198b5d37918116c8b5af_large.jpeg'},
  { 'author': '- Bran Stark', 'quote': 'Awake, I am still broken, but when I sleep, when I&#39m Summer, I can run and fight and hear and smell.', 'img': 'http://img0.gtsstatic.com/wallpapers/560d85d94549198b5d37918116c8b5af_large.jpeg'},
  { 'author': '- Daenerys Targaryen', 'quote': 'I am a Khaleesi of the Dothraki. I am the wife of the great Kahl and I carry his son inside me. The next time you raise a hand to me will be the last time you have hands.', 'img': 'http://images6.fanpop.com/image/photos/33800000/daenerys-house-targaryen-33827799-1600-1200.jpg'},
  { 'author': '- Daenerys Targaryen', 'quote': 'I&#39m not going to stop the wheel, I&#39m going to break the wheel.', 'img': 'http://images6.fanpop.com/image/photos/33800000/daenerys-house-targaryen-33827799-1600-1200.jpg'},
  { 'author': '- Daenerys Targaryen', 'quote': 'It seems to me that a queen who trusts no one is as foolish as a queen who trusts everyone.', 'img': 'http://images6.fanpop.com/image/photos/33800000/daenerys-house-targaryen-33827799-1600-1200.jpg'},
  { 'author': '- Arya Stark', 'quote': 'Swift as a deer. Quiet as a shadow. Fear cuts deeper than swords.', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-02.jpg'},
  { 'author': '- Arya Stark', 'quote': 'Valar Morghulis.', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-02.jpg'},
  { 'author': '- Arya Stark', 'quote': 'What do we say to the god of death? Not today..', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-02.jpg'},
  { 'author': '- Jon Snow', 'quote': 'I want to fight for the side that fights for the living.', 'img': 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/2014/08/01/game-thrones-season-5-spoilers.jpg'},
  { 'author': '- Jon Snow', 'quote': 'I heard it was best to keep your enemies close.', 'img': 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/2014/08/01/game-thrones-season-5-spoilers.jpg'},
  { 'author': '- Jon Snow', 'quote': 'They were born on the wrong side of the wall, that doesn&#39t make them monsters.', 'img': 'http://s1.ibtimes.com/sites/www.ibtimes.com/files/2014/08/01/game-thrones-season-5-spoilers.jpg'},
	{ 'author': '- Joffrey Baratheon', 'quote': 'I&#39ll give him a red smile. From ear to ear. ', 'img': 'http://staticpopopics.popopics.com/uploads/original/hbo-drama-game-of-thrones-season-3-hd-characters-wallpaper-1600x1200-08-01.jpg'},
	{ 'author': '- Joffrey Baratheon', 'quote': 'I AM THE KING!!', 'img': 'http://staticpopopics.popopics.com/uploads/original/hbo-drama-game-of-thrones-season-3-hd-characters-wallpaper-1600x1200-08-01.jpg'},
	{ 'author': '- Joffrey Baratheon', 'quote': 'Everyone is mine to torment..', 'img': 'http://staticpopopics.popopics.com/uploads/original/hbo-drama-game-of-thrones-season-3-hd-characters-wallpaper-1600x1200-08-01.jpg'},
	{ 'author': '- Cersei Baratheon', 'quote': 'Whenever you play the game of thrones, you win or you die...', 'img': 'http://www.moviedeskback.com/wp-content/uploads/2013/03/Game-of-Thrones-season-3-wallpaper-Cersei.jpg'},
	{ 'author': '- Cersei Baratheon', 'quote': 'The more people you love, the weaker you are.', 'img': 'http://www.moviedeskback.com/wp-content/uploads/2013/03/Game-of-Thrones-season-3-wallpaper-Cersei.jpg'},
	{ 'author': '- Cersei Baratheon', 'quote': 'Love is poison. A sweet poison, yes, but it will kill you all the same.', 'img': 'http://www.moviedeskback.com/wp-content/uploads/2013/03/Game-of-Thrones-season-3-wallpaper-Cersei.jpg'},
	{ 'author': '- Sansa Stark', 'quote': 'My skin has turned to porcelein, to ivory, to steel.', 'img': 'http://www.moviemarkers.net/wp-content/uploads/2013/03/got-s3-sansa-wallpaper-1600.jpg'},
	{ 'author': '- Sansa Stark', 'quote': 'I know what Ramsey is. I know what he&#39ll do to me. If I&#39m going to die, let it happen while there&#39s still some of me left.', 'img': 'http://www.moviemarkers.net/wp-content/uploads/2013/03/got-s3-sansa-wallpaper-1600.jpg'},
	{ 'author': '- Sansa Stark', 'quote': 'My mother used to say: darks wings, dark words.', 'img': 'http://www.moviemarkers.net/wp-content/uploads/2013/03/got-s3-sansa-wallpaper-1600.jpg'},
	{ 'author': '- Jamie Lannister', 'quote': 'Tell me, if I stabbed the Mad King in the belly instead of the back, would you admire me more?', 'img': 'http://www.gameofthroneswallpaper.net/wp-content/uploads/2014/07/Jamie-Lannister-Game-of-Thrones.jpg'},
	{ 'author': '- Jamie Lannister', 'quote': 'There are no men like me. Only me.', 'img': 'http://www.gameofthroneswallpaper.net/wp-content/uploads/2014/07/Jamie-Lannister-Game-of-Thrones.jpg'},
	{ 'author': '- Jamie Lannister', 'quote': 'So many vows. They make you swear and swear. Defend the king. Obey the king. Obey your father. Protect the innocent. Defend the weak. What if your father despises the king? What If the king massacres the innocent?', 'img': 'http://www.gameofthroneswallpaper.net/wp-content/uploads/2014/07/Jamie-Lannister-Game-of-Thrones.jpg'},
	{ 'author': '- Robb Stark', 'quote': 'Tell Lord Tywin winter is coming for him. Twenty thousand northerners marching south to find out if he really does shit gold.', 'img': 'http://vignette2.wikia.nocookie.net/gameofthrones/images/1/1b/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-09.jpg/revision/latest?cb=20130603061845'},
	{ 'author': '- Robb Stark', 'quote': 'Love is not always wise, I&#39ve learned. It can lead us to great folly, but we follow our hears...wherever they take us.', 'img': 'http://vignette2.wikia.nocookie.net/gameofthrones/images/1/1b/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-09.jpg/revision/latest?cb=20130603061845'},
	{ 'author': '- Robb Stark', 'quote': 'I once asked my father: how can a man be brave when he is afraid? That is the only time a man can be brave, he said.', 'img': 'http://vignette2.wikia.nocookie.net/gameofthrones/images/1/1b/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-09.jpg/revision/latest?cb=20130603061845'},
	{ 'author': '- Sandor Clegane (The Hound)', 'quote': 'There are no true knights, no more than there are gods. If you can&#39t protect yourself, die and get out of the way of those who can. Sharp steel and strong arms rule this world. Don&#39t ever believe any different.', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-10.jpg'},
	{ 'author': '- Sandor Clegane (The Hound)', 'quote': 'A dog doesn&#39t need courage to chase of rats..', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-10.jpg'},
	{ 'author': '- Sandor Clegane (The Hound)', 'quote': 'I&#39m honest. It&#39s the world that&#39s awful.', 'img': 'http://www.catchwallpaper.com/wp-content/uploads/2013/03/HBO-drama-Game-of-Thrones-Season-3-HD-characters-wallpaper-1600x1200-10.jpg'},
	{ 'author': '- Catelyn Tully Stark', 'quote': 'I was born a Tully and married a Stark. I don&#39t frighten easily.', 'img': 'http://images6.fanpop.com/image/photos/33700000/Catelyn-Tully-Stark-S3-catelyn-tully-stark-33787485-1600-1200.jpg'},
	{ 'author': '- Catelyn Tully Stark', 'quote': 'I want to weep. I want to be comforted. I&#39m so tired of being strong.', 'img': 'http://images6.fanpop.com/image/photos/33700000/Catelyn-Tully-Stark-S3-catelyn-tully-stark-33787485-1600-1200.jpg'},
	{ 'author': '- Catelyn Tully Stark', 'quote': 'The singers make much of kings who die valiantly in battle, but your life is worth more than a song.', 'img': 'http://images6.fanpop.com/image/photos/33700000/Catelyn-Tully-Stark-S3-catelyn-tully-stark-33787485-1600-1200.jpg'}
];

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
    $('#clicky').text('You know nothing..'); // change anchor text on click
    old_random = new_random;
  }); 
});