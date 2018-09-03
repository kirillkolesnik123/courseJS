function sum(a, b) {
	return a + b > 10;
}

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let result = arr.reduce(function(num){
	return num = arr[1][1];
})
 	
let assert = require('chai').assert

describe ('sum', function (){
	
	it('Получаем boolean', function (){
		assert.typeOf(sum(2,2), 'boolean')
	});
});

describe ('arr', function (){
	
	it('Получаем num = 5', function (){
		assert.equal(result,5)
	})
})

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
}

describe ('each', function (){
	
	it('Проверяем тип данных', function (){
		assert.typeOf(each(arr1,myFunc),'array')
	});
});

describe ('arr1', function (){
	
	it('Длина массива', function (){
		assert.lengthOf(each(arr1,myFunc),5)
	});
});

describe ('each', function (){
	
	it('Результат массива', function (){
		assert.sameMembers(each(arr1,myFunc),[8, 7, 6, 5, 4])
	});
});




