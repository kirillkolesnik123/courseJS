/*let week=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
for (i=0; i<week.length; i++){

if (week[i]== "saturday" || week[i]== 'sunday') {
document.write('<b>'+week[i]+ '</b>'+'<br>');
} else if(week[i]== "monday"){
	document.write('<i>'+week[i]+'</i>'+'<br>');

}else {
	document.write(week[i]+'<br>');
}}*/
let numbers=['2213123','3434543','7854953','6584735','3568745','9856123','7854326'];
for(i=0; i<numbers.length;i++){
	if (numbers[i].slice(0,1)==3 || numbers[i].slice(0,1) ==7){
		console.log(numbers[i]);

	}

	}


