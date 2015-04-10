/********** GUESSING GAME **********/

//when a game begins (page loads or 'Play Again' clicked), there should be a random 
//number generated between 1 and 100

//returns a random integer between min (included) and max (excluded). 
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
};

//set the random number
var numberToGuess = getRandomInt(1, 100);
console.log(numberToGuess);


//set the number of user guesses
var numberOfGuesses = 5;


//track the user guesses
var guesses = [];


var currentGuess;


//check to make sure the user entered a valid number
function checkGuessValidity(){
	// validation code
	if (currentGuess < 1 || currentGuess > 100) {
		alert('Please enter a number between 1 and 100');
		return false;
	}
	else {
		return true;
	}
};


//let's the user know if their guess was 'hot' or 'cold'
//to be called AFTER checking if guess was correct
function hotOrCold() {
	var temp = currentGuess - numberToGuess;
	
	//if guessed correctly
	if (temp === 0) { 
		$("p").text("CONGRATS! You guessed the lucky number!");
	}
	//if guessed too high
	else if (temp >= 35) {
		$("p").text("You're ice cold! Guess lower.")
	}
	else if (34 >= temp && temp >= 10) {
		$("p").text("Getting warmer. Guess lower.")
	}
	else if (9 >= temp && temp > 0) {
		$("p").text("You're hot! Just a bit lower.")
	}
	//if guessed too low
	else if (Math.abs(temp) >= 35) {
		$("p").text("You're ice cold! Guess higher.");
	}
	else if (34 >= Math.abs(temp) && Math.abs(temp) >= 10) {
		$("p").text("Getting warmer. Guess higher.");
	}
	else if (9 >= Math.abs(temp) && Math.abs(temp) > 0) {
		$("p").text("You're hot! Just a bit higher.");
	}

	if (numberOfGuesses === 0) {
		$("p").text("GAME OVER. THE NUMBER WAS " + numberToGuess +"! PLEASE PLAY AGAIN.");
	}
}


function trackGuesses() {
	if (guesses.indexOf(currentGuess) !== -1) {
		alert("You guessed that number already!");
		//you don't lose a turn though!
		numberOfGuesses += 1
	}
	else {
		guesses.push(currentGuess);
	}
	numberOfGuesses -= 1;
};


$(document).ready(function(){

//use this when they hit 'enter' to submit their guess
$('input').on('keypress', function() {
 	if (event.which === 13) {
		if (numberOfGuesses > 0) {
			currentGuess = +$('input').val();
			if (checkGuessValidity()) {
			trackGuesses();
			hotOrCold();
			}
			$('input').val('');
		}
 	}
	
});


//use this when they click the button to submit their guess
$('#submitGuess').on('click', function(){
	if (numberOfGuesses === 0) {
		$("p").text("GAME OVER. THE NUMBER WAS " + numberToGuess +"! PLEASE PLAY AGAIN.");
	} else {
		currentGuess = +$('input').val();
		if (checkGuessValidity()) {
		trackGuesses();
		hotOrCold();
		}
		$('input').val('');
	}
});


//use this when they click the button to play again
$('#playAgain').on('click', function() {
	//reloads the page from the cache
	location.reload();
});


$("#showHint").text(numberToGuess);

//use this when they click the hint button
$('#giveHint').on('click', function() {
	//show the hidden answer
	$("h1").toggle();
});


//shows that you are hovering over the button
$("button").hover(function() {
	$(this).css("background-color", "gray");
	},
	function() {
	$(this).css("background-color", "rgba(119, 101, 101, 0.37)");
	});

}) //end of document.ready()



