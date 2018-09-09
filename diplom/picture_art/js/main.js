'use strict'
window.addEventListener('DOMContentLoaded',function(){
//Modal-gift
let gift = document.querySelector('.fixed-gift'),
overlay=document.querySelector('.popup-gift'),
close=document.querySelectorAll('.popup-close');


gift.addEventListener('click', function(){
	overlay.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';

});
for(let i = 0;i< close.length; i++){
	close[1].addEventListener('click',function (){
		overlay.style.display='none';
		document.body.style.overflow ='';
		gift.style.display='block';	
	});}

	window.addEventListener('click',function(e){
		if(e.target == overlay){
			overlay.style.display='none';
			document.body.style.overflow ='';
			gift.style.display='block';	
		}
	});
	//modal design
//button 0,2,9,10,11,12, close 2 
let btn = document.querySelectorAll('.button'),
overlaydesign=document.querySelector('.popup-design'),	
overlaycons=document.querySelector('.popup-consultation');

for(let i =0; i<btn.length;i++){
	if(i === 0||i === 1||i=== 2|| i===9|| i===10 || i===11 || i===12){
		btn[i].addEventListener('click',function(){
			overlaydesign.style.display='block';
			document.body.style.overflow ='hidden';
			btn[9].style.display ='none';
			btn[10].style.display ='none';
			btn[11].style.display ='none';
		});	
		close[2].addEventListener('click', function (){
			overlaydesign.style.display='none';
			document.body.style.overflow ='';
			if(i===9||i===10||i===11){
				btn[i].style.display ='block';}
			});
		window.addEventListener('click',function(e){
			if(e.target == overlaydesign){
				overlaydesign.style.display='none';
				document.body.style.overflow ='';
				if(i===9||i===10||i===11){
					btn[i].style.display ='block';}
				}
			});
	}
	if(i === 4 || i ===6|| i=== 7){
		btn[i].addEventListener('click',function(){
			overlaycons.style.display='block';
			document.body.style.overflow ='hidden';
			btn.style.display ='none';
		});
		close[0].addEventListener('click', function (){
			overlaycons.style.display='none';
			document.body.style.overflow ='';
			btn.style.display ='block';
		});
		window.addEventListener('click',function(e){
			if(e.target == overlaycons){
				overlaycons.style.display='none';
				document.body.style.overflow ='';
			}

		});

	}
}});
/*//Form for AJAX
let message = new Object();
message.loading = 'Загрузка...';
message.success = 'Спасибо ! Скоро мы с Вами свяжемся!';
message.failure = 'что-то пошло не так...';

let form = document.querySelectorAll('form')[1],
	input = form.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

	form.addEventListener('submit',function(event){
		event.preventDefault();
		form.appendChild(statusMessage);

//AJAX
let request = new XMLHttpRequest();
request.open('POST','server.php');

request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

let formData = new FormData(form);

request.send(formData);

request.onreadystatechange = function() {
	if (request.readyState < 4){
		statusMessage.innerHTML = message.loading;
	} else if (request.readyState === 4){
		if(request.status ===200 && request.status <300){
			statusMessage.innerHTML = message.success;
					//Добавляем контент на страницу	
				} else {
					statusMessage.innerHTML = message.failure;}
				}
			};
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				//Очищаем поля ввода
			}
		});

		});
*/

