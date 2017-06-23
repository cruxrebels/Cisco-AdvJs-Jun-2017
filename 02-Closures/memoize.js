function memoize(fn){
	var cache = {};

	return function(no){
		if (typeof cache[no] === 'undefined')
			cache[no] = fn(no);
		return cache[no];
	}
}

var isOddOrEven = memoize(function(n){
	console.log('processing ', n);
	return n % 2 === 0 ? 'even' : 'odd';
});

var isPrime = memoize(function (no){
	console.log('processing ', no);
	if (no < 3) return true;
	for(var index = 2; index <= (no/2); index++)
		if (no % index === 0){
			return false
		}
	return true;
});