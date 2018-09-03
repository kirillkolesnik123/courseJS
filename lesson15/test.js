function(name){
	let message = 'My name is' + name
	return message

}

let assert = require('chai').assert

describe('sayname', function (){
	it('Получаем фразу с новым именем', function(){
		assert.typeOf(sayname('Kris'),'string');
	});
});