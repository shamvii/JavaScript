//Passing Fucntions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for(var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));

	}

	return arrRes;
}

function calculateAge(el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el){
	if(el >= 18 && el <= 81) {
	return Math.round(206.9 - (0.67 * el));
} else {
	return -1;
}
}

//Here we are not passing calculateAge as a function(i.e calculateAge()) but as a parameter since 
//it is a callback function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);









