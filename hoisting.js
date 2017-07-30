//Hoisting
//Hoisting just works for Function Declarations and not function expressions

calculateAge(1990);

function calculateAge(year){
	console.log(2016 - year);
}

//calculateAge(1990);

//function expression
//this won't work because hoidting is only for function declarations
retirement(1965);

var retirement = function(year){
	console.log(65. (2016 - year));
}

//varaiables
console.log(age);
var age = 23;

//We would get "undefined" because JS knows there's gonna be a variable with that name.
//console.log(age);

function foo() {
	//console.log(age); //here it will be undefined
	var age = 65;
	console.log(age);
}

foo(); //65
console.log(age); //23



