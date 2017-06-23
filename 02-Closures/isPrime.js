var isPrime = (function(){
	var cache = {};

	function isPrime(no){
		if (typeof cache[no] !== 'undefined')
			return cache[no];
		console.log('processing ', no);
		cache[no] = true;
		if (no < 3) return cache[no];
		for(var index = 2; index <= (no/2); index++)
			if (no % index === 0){
				cache[no] = false;
				break;
			}
		return cache[no];
	}

	return isPrime
})();

var isPrime = (function(){
	var cache = {};

	function checkPrime(no){
		console.log('processing ', no);
		if (no < 3) return true;
		for(var index = 2; index <= (no/2); index++)
			if (no % index === 0){
				return false
			}
		return true;
	}

	return function(no){
		if (typeof cache[no] === 'undefined')
			cache[no] = checkPrime(no);
		return cache[no];
	}
})();

var isOddOrEven = (function(){
	var cache = {};

	function checkOddOrEven(no){
		console.log('processing ', no);
		return no % 2 === 0 ? 'even' : 'odd';
	}

	return function(no){
		if (typeof cache[no] === 'undefined')
			cache[no] = checkOddOrEven(no);
		return cache[no];
	}
})();
