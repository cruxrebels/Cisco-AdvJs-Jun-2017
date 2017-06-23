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


//The below implementation works with any function with any number of arguments
function memoize(fn){
	var cache = {};

	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] === 'undefined')
			cache[key] = fn.apply(this, arguments);
		return cache[key];
	}
}

var cachedAdd = memoize(function(x,y){
	console.log('processing ', x , ' and ', y);
	return x + y;
})


var cachedAdd3 = memoize(function(n1, n2, n3){
	console.log('processing ', n1, ', ' , n2, ', and ', n3);
	return n1 + n2 + n3;
})




