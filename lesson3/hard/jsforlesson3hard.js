
let str = 'урок-3-был слишком легким';

let say= (str.charAt(0).toUpperCase()+ str.substr(1).toLowerCase()).replace(/-/g, " ").substr(18).replace(/им/g, 'оо');

console.log(say);


arr = [20, 33, 1, 'Человек', 2, 3];

let  radical = 0;

for(i=0; i<arr.length; i++){
	
	if (isFinite(arr[i])) {
		radical=radical + Math.pow(arr[i],3);
	}
}

console.log(Math.sqrt(radical));

function showString(information){
	
	if (!isNaN(information)) {
		console.log('Строку пиши');
	}

	else {
		information = information.trim();
		if (information.length>=50) {
			information = information.substr(0,50) + "...";
		}
	}
	console.log(information);
}

showString('             Привет Андрей')



