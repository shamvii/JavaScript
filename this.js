//console.log(this); - window object

function calculateAge(year) {
	console.log(2016 - year);
	console.log(this); //here is the argument
}

var john = {
	name: "john",
	yearOfBirth: 1990,
	calculateAge: function() {
		console.log(this);

		// function innerFunction() {

		// 	console.log(this); //window object because for regular function call it is always window object although it is inside another method
		// } //"this" here is the "john" object
	}
}

john.calculateAge();

var mike = {
	name: mike,
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();










