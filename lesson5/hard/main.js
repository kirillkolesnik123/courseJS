function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();
var hours = d.getHours();
var minutes = d.getMinutes();
var seconds = d.getSeconds();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");

if (day <= 9) day = "0" + day;
if (hours <= 9) hours = "0" + hours;
if (minutes <= 9) minutes = "0" + minutes;
if (seconds <= 9) seconds = "0" + seconds;

date_time = "Сегодня - " + day + " " + month[month_num] + " " + d.getFullYear() +
" г.&nbsp;&nbsp;&nbsp;Текущее время - "+ hours + ":" + minutes + ":" + seconds;
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("doc_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
} clock();

function currentDateRus () {

let dateMonth = new Date().toLocaleString('ru', { year: "2-digit", month: 'long', day: 'numeric'});
	today = new Date().getDay();
	week = [
	"понедельник",
	"вторник",
	"среда",
	"четверг",
	"пятница",
	"суббота",
	"воскресенье"
	];

	for (i=0; i<week.length; i++) {

		if (today===i+1) {
			document.write(dateMonth + '<br>' + week[i])
		}
	}
}

currentDateRus ()

function currentDateZero () {

	let currentDate = new Date();
	let currentDateHour = ('0' + currentDate.getHours()).slice(-2);
		currentDateMin = ('0'+ currentDate.getMinutes()).slice(-2),
		currentDateSec = ('0'+ currentDate.getSeconds()).slice(-2),
		cM1=currentDate.getMonth() + 1,
		currentDateMonth = ('0'+ cM1).slice(-2),
		currentDateNum = ('0'+ currentDate.getDate()).slice(-2),
		currentDateYear = currentDate.getUTCFullYear()


	let todayDate ='"' + currentDateHour + ":" + currentDateMin + ':' + currentDateSec + " " + currentDateNum + '.' + currentDateMonth + "." + currentDateYear + '"';

	document.write( '<br>' + todayDate + '<br>')

}

currentDateZero()

function days_between(date1, date2) { 


	var ONE_DAY = 1000 * 60 * 60 * 24 


	var date1_ms = date1.getTime() 
	var date2_ms = date2.getTime() 


	var difference_ms = Math.abs(date1_ms - date2_ms) 

	return Math.round(difference_ms/ONE_DAY) 

}

var input1 = document.getElementById('input1'),
	input2 = document.getElementById('input2'),
	input3 = document.getElementById('input3'),
	date1 = new Date('2017-1-10');
	date2 = new Date('2017-2-10`');

input1.style.width = '450' + 'px';
input2.style.width = '450' + 'px';
input3.style.width = '100' + 'px';


var button = document.getElementById('button');

button.addEventListener ('click', () => {
	var difDateInput3 = '',
		dateInput1 = input1.value,
		dateInput2 = input2.value,

	difDateInput3 = days_between (new Date(dateInput1), new Date(dateInput2));
	console.log(difDateInput3)
	input3.value = difDateInput3;});

