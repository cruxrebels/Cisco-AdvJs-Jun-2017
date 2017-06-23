/*
sort
filter
groupBy
*/

var products = [
	{id : 7, name : 'Pen', cost : 40, units : 60, catgory : 'stationary'},
	{id : 4, name : 'Len', cost : 80, units : 30, catgory : 'grocery'},
	{id : 9, name : 'Ten', cost : 90, units : 50, catgory : 'stationary'},
	{id : 5, name : 'Den', cost : 50, units : 40, catgory : 'stationary'},
	{id : 6, name : 'Ken', cost : 20, units : 70, catgory : 'grocery'},
];

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}

describe('Default List', function(){
	console.table(products);
});


describe('Sort', function(){
	describe('Default Sort [ products by id ]', function(){
		function sort(){
			for(var i = 0; i < products.length-1; i++)
				for(var j = i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	describe('Any list by any attribute', function(){
		function sort(){
			for(var i = 0; i < products.length-1; i++)
				for(var j = i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		describe('Products by cost', function(){
			//sort
			console.table(products);
		});

		describe('Products by units', function(){
			//sort
			console.table(products);
		});
	});
});

/*describe('Filter', function(){
	describe('Default Filter [ all stationary products ]', function(){
		console.table(products);
	});

	describe('Any list by any criteria', function(){
		describe('All costly products [ cost > 50 ]', function(){
			//sort
			console.table(products);
		});
	});
});*/
