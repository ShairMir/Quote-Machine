var quotes = [
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. - Sirius Black",
    "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you. - Tyrion Lannister",
    "If I'm not back in 5 minutes....Just wait longer. - Ace Ventura" 
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
    $('.quote').html(quotes[new_random]);
    old_random = new_random;
  }); 
}); 