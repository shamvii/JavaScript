//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

//es5
dunction driversLicense5(passedTest){

	if(passedTest) {
		var fn = 'John';
		var yob = 1990;

		console.log(fn + ' , born in ' + yob + ', is allowed to drive');
	}
	//will work
	//console.log(fn + ' , born in ' + yob + ', is allowed to drive');
}
driversLicense5(true);


//ES6
dunction driversLicense6(passedTest){

	if(passedTest) {
		let fn = 'John';
		const yob = 1990;

		console.log(fn + ' , born in ' + yob + ', is allowed to drive');
	}
	//won't work
	//console.log(fn + ' , born in ' + yob + ', is allowed to drive');
}
driversLicense6(true);







