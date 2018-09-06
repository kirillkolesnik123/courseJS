window.addEventListener('DOMContentLoaded',function(){
//Modal
let gift = document.querySelector('.fixed-gift'),
overlay=document.querySelector('.popup-gift'),
close=document.querySelectorAll('.popup-close')[1],
content=document.querySelector('.popup-content');


gift.addEventListener('click', function(){
	overlay.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';

});
close.addEventListener('click', function (){
	overlay.style.display='none';
	document.body.style.overflow ='';
});

window.addEventListener('click',function(e){
	if(e.target == overlay){
		overlay.style.display='none';
		document.body.style.overflow ='';
	}
});

let btn0 = document.querySelectorAll('.button')[0],
btn2 = document.querySelectorAll('.button')[2],
btn9 = document.querySelectorAll('.button')[9],
btn12 = document.querySelectorAll('.button')[12],
overlaydesign=document.querySelector('.popup-design'),
closedesign=document.querySelectorAll('.popup-close')[2];		

btn0.addEventListener('click',function(){
	overlaydesign.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';

});
btn2.addEventListener('click',function(){
	overlaydesign.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';

});
btn9.addEventListener('click',function(){
	overlaydesign.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';
});
btn12.addEventListener('click',function(){
	overlaydesign.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';
});
closedesign.addEventListener('click', function (){
	overlaydesign.style.display='none';
	document.body.style.overflow ='';
	gift.style.display='none';
});

window.addEventListener('click',function(e){
	if(e.target == overlaydesign){
		overlaydesign.style.display='none';
		document.body.style.overflow ='';
	}
});

let btn4 = document.querySelectorAll('.button')[4],
btn6 = document.querySelectorAll('.button')[6],
overlaycons=document.querySelector('.popup-consultation'),
closecons=document.querySelectorAll('.popup-consultation')[0];		


btn4.addEventListener('click',function(){
	overlaycons.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';
});

btn6.addEventListener('click',function(){
	overlaycons.style.display='block';
	document.body.style.overflow ='hidden';
	gift.style.display='none';
});

closecons.addEventListener('click', function (){
	overlaycons.style.display='none';
	document.body.style.overflow ='';
	gift.style.display='none';
});

window.addEventListener('click',function(e){
	if(e.target == overlaycons){
		overlaycons.style.display='none';
		document.body.style.overflow ='';
	}
});
//Form for AJAX
let message = new Object();
message.loading = 'Загрузка...';
message.success = 'Спасибо ! Скоро мы с Вами свяжемся!';
message.failure = 'что-то пошло не так...';

let form = document.querySelectorAll('main-form')[0],
input = form.getElementsByTagName('input'),
statusMessage = document.createElement('div');
statusMessage.classList.add('status');

form.addEventListener('submit',function(event){
	event.preventDefault();
	form.appendChild(statusMessage);

//AJAX
let request = new XMLHttpRequest();
request.open('POST','server.php')

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
			}
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				//Очищаем поля ввода
			}
		});




});












