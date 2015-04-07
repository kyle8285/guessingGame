/********** GUESSING GAME **********/

//when a game begins (page loads or 'Play Again' clicked), there should be a random 
//number generated between 1 and 100

//returns a random integer between min (included) and max (excluded). 
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};


var numberToGuess = getRandomInt(1, 100);
console.log(numberToGuess);


//set the number of user guesses
var numberOfGuesses = 5;
console.log("Guesses remaining: ", numberOfGuesses);

//hide the answer
$('span').hide();

$(document).ready(function(){

 var currentGuess;


//let's the user know if their guess was 'hot' or 'cold'
//to be called AFTER checking if guess was correct
function hotOrCold() {
	var temp = currentGuess - numberToGuess;
	console.log(typeof temp);
	//if guessed too high
	if (temp === 0) { 
		console.log("CONGRATS! You guessed the lucky number!")
	}
	else if (temp >= 35) {
		console.log("Way too high. Guess lower.")
	}
	else if (34 >= temp >= 10) {
		console.log("Getting warmer. Guess lower.")
	}
	else if (9 >= temp > 0) {
		console.log("You're hot! Just a bit lower.")
	}
	else {
		console.log("Guess lower!")
	}
}








//use this when they hit 'enter' to submit their guess
//  $('input').on('keyup', function() {
// 	var number = $(this).val();
// 	console.log(number);
// });


//use this when they click the button to submit their guess
$('#submitGuess').on('click', function(e){
	console.log(e);
	//alert();
	currentGuess = $('input').val();
	console.log(typeof currentGuess);
	//checkGuessValidity(currentGuess);
	$('input').val('');
	console.log(currentGuess);
	// if (currentGuess == numberToGuess) {
	// 	console.log("CONGRATS! You guessed the lucky number!");
	// }
	hotOrCold();
	numberOfGuesses -= 1;
	console.log("Guesses remaining: ", numberOfGuesses);
	$("div").after("Numbers you've guessed: ", currentGuess);
});


//use this when they click the button to play again
$('#playAgain').on('click', function() {
	//reloads the page from the cache
	location.reload();
});


//use this when they click the hint button
$('#giveHint').on('click', function() {
	//remove the button and show the hidden answer
	$('span').show();
	$(this).remove();
});

// function checkGuessValidity(guess){
// 	// validation code
// 	if(guess !== typeof "number"){
// 		return alert('you must input a number');
// 	}
// };

})



