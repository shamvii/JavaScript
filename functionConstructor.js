//Function Constructor

var john = {
	name: 'John',
	yeqarOfBirth: 1990,
	job: 'teacher'
};


//Creating Function Constructor 
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastNAme = 'Smith';

//new creates empty object
var john = new Person('John', 1986, 'teacher');
var mark = new Person('John', 1990, 'designer');
var jane = new Person('John', 1987, 'programmer');
var jenn = new Person('John', 1942, 'retired');

john.calculateAge();
console.log(john.lastName);
mark.calculateAge();
console.log(mark.lastName);
jenn.calculateAge();
console.log(jenn.lastName);
jane.calculateAge();
console.log(jane.lastName);










