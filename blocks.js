//Blocks and IIFEs

{
	const a = 1;
	let b = 2;
	var c = 3;
}

console.log(a +b); //gives error, outside the block
console.log(c); //would work since var is not block scoped

//ES5 - IIFE
(function() {
	var c = 3;
})();

//console.log(c);