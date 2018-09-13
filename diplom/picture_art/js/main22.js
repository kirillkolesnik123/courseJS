window.addEventListener('DOMContentLoaded',function(){

	let accordeon = require('../parts/accordeon.js');
	let ajax = require('../parts/ajax.js');
	let calculator = require('../parts/calculator.js');
	let downloadblocks = require('../parts/downloadblocks.js');
	let filterblock = require('../parts/filterblock.js');
	let modalwindows = require('../parts/modalwindows.js');
	let picturesshow = require('../parts/picturesshow.js');
	let sliders = require('../parts/sliders.js');
	
		
		accordeon();
		ajax();
		calculator();
		downloadblocks();
		filterblock();
		picturesshow();
		sliders();
		modalwindows();
		

});

