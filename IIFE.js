//Immediately Invoked Function Expressions IIFE
//Game to find the score if the score is greater than equal to 5
//but keep the score hidden

function game() {
	var score = Math.random() + 10;
	console.log(score>=5);
}
game();

//IIFE
//Wrapping inside the paranthesis is always an expression
//Creates data privacy, so we can't access Score from outside
//Also no interference from other variables
(function () {
	var score = Math.random() + 10;
	console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
	var score = Math.random() + 10;
	console.log(score >= 5 - goodLuck);
})(5); 











