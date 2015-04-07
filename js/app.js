// $(".buttons").hide();
// $(".buttons").show('slow');


//when 'Submit Your Guess' button is pressed

$("input").submit(function(){
	alert("You hit the ENTER button!");
});

// $("#submitGuess").on('click', function() {
// 	alert("You clicked the submit button.");
// });

$(".buttons").on('click', function() {
	// if ($(this) === $("#submitGuess") {
	// 	alert("You clicked the submit button.");
	// } 
	alert("You clicked a button.");
});

$("input").on('keyup', function() {
	var number = $(this).val();
});

//when a game begins(page loads or 'Play Again' clicked, there should be a random 
//number generated between 1 and 100

	//returns a random integer between min (included) and max (excluded). 
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	};



