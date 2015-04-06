$(".buttons").hide();
$(".buttons").show('slow');


//when 'Submit Your Guess' button is pressed

$("#input").submit(function(){
	alert("You hit the ENTER button!");
});

$(".buttons").on('click', function() {
	alert("You clicked a button.");
});