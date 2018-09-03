let num = 50;
if( num < 49){
	console.log('неверно')
} else if(num>100) {
	console.log('неверно')
	} else {
		console.log('верно!')
	}
(num == 50)? console.log('верно'): console.log('неверно');

switch (num){
	case 49:
	console.log('мало');
	break;
	console.log('много!');
	break;
	case 80:
	console.log('все еще много');
	break;
	case 50:
	console.log('в точку!');
	break;
	default:
	console.log('не в этот раз');
	break;
}


 /*do{
	console.log(num);
	num++;
}
while (num <55);*/ 

 