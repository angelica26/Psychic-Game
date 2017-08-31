
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessesMade = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var reset = function() {
	guessesRemaining = 10;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	guessesMade = [];
}

document.onkeyup = function(event){
console.log(event);
var userGuess = event.key;

guessesMade.push(userGuess);
console.log(guessesMade);



if (userGuess === computerGuess) {
	wins++;
	reset();
}

else {
	guessesRemaining--;
}

if (guessesRemaining <= 0) {
	losses++;
	reset();
}




console.log(userGuess);	
console.log(computerGuess);

var html = 
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Letters Guessed: " + guessesMade + "</p>" +
"<p>Guesses Remaining: " + guessesRemaining + "</p>";

document.querySelector("#game").innerHTML = html;
}
