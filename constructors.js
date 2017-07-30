//Function constructor

var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

//function constructor name starts with a capital letter

var Person = function(name, yearOfBirth, job) {
	this.name = name; // right-side name is the parameters passed
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	
}

//To show inheritance

Person.prototype.calculateAge = function() {
		console.log(2016 - this.yearOfBirth);
	};

Person.prototype.lastName = 'Smith';

//creating new objects - called instantiation
var john = new Person('John', 1990, 'teacher'); //new points to the empty object initially created
var jane = new Person('Jane', 1969, 'Designer');

john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);








