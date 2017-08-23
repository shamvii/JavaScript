//Closures

function retirement(retirementAge) {
	return function(yearOfBirth) {
		var a = ' years left until retirement! ';
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);

 var retirementIndia = retirement(64);

 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);

 retirementUS(1990);
 retirementIndia(1990);
 retirementGermany(1990);
 retirementIceland(1990);






