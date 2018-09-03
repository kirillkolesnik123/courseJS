window.addEventListener('DOMContentLoaded',function(){

	let tab= require('../parts/tab.js');
	let timer= require('../parts/timer.js');
	let modal= require('../parts/modal.js');
	let form= require('../parts/form.js');
	let ajax= require('../parts/ajax.js');
	let slider= require('../parts/slider.js');
	let calc= require('../parts/calc.js');
	
	

	tab();
	timer();
	ajax();
	calc();
	slider();
	modal();
	form();

});
/*AMD – одна из самых древних систем организации модулей, требует лишь наличия клиентской библиотеки, к примеру, require.js, но поддерживается и серверными средствами.
CommonJS – система модулей, встроенная в сервер Node.JS. Требует поддержки на клиентской и серверной стороне.
UMD – система модулей, которая предложена в качестве универсальной. UMD-модули будут работать и в системе AMD и в CommonJS.*/