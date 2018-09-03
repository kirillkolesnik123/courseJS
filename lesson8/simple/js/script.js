window.addEventListener('DOMContentLoaded',function(){

	let tab = document.getElementsByClassName('info-header-tab'),
	tabContent = document.getElementsByClassName('info-tabcontent'),
	info= document.getElementsByClassName('info-header')[0];
	function hideTabContent(a){
		for(let i =a;i<tabContent.length;i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b){
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}
	info.addEventListener('click',function(event){
		let target =event.target;
		if(target.className =='info-header-tab'){
			for(let i=0;i<tab.length;i++){
				if(target==tab[i]){
					showTabContent(i);
					break;
				}
			}
		};
	});

// Timer
let deadline = '2018-08-28';

function getTimeRemaining(endtime){
	let t = Date.parse(endtime) - Date.parse(new Date());
	let seconds = Math.floor( (t/1000) % 60 );
	if(seconds<=9){
		seconds='0'+seconds
	}
	let minutes = Math.floor( (t/1000/60) % 60);
	if(minutes<=9){
		minutes= '0'+ minutes
	}
	let hours = Math.floor( (t/(1000*60*60)) );
	if(hours<=9){
		hours='0'+hours
	}
	if(t<=0){
		seconds=0+'0',
		minutes =0+'0',
		hours=0+'0';

	} 		
	return {
		'total': t,
		'hours': hours,
		'minutes':minutes,
		'seconds':seconds
	};
	
};

function setClock(id, endtime){

	let timer = document.getElementById(id),
	hours = timer.querySelector('.hours'),
	minutes = timer.querySelector('.minutes'),	
	seconds = timer.querySelector('.seconds');



	function updateClock(){
		let t = getTimeRemaining(endtime);
		if(t.hours <=0 && t.minutes <=0 && t.seconds <=0){
			clearInterval(updateClock);
			hours.innerHTML = "00";
			minutes.innerHTML = "00";
			seconds.innerHTML = "00";
		} else {
			hours.innerHTML = t.hours;
			minutes.innerHTML = t.minutes;
			seconds.innerHTML = t.seconds;
		}

	};

	updateClock();
	setInterval(updateClock, 1000);

}


setClock('timer',deadline);

//Модальное
let more = document.querySelector('.more'),
overlay=document.querySelector('.overlay'),
close=document.querySelector('.popup-close');
btn=document.querySelectorAll('.description-btn');

more.addEventListener('click', function(){
	this.classList.add('more-splash');
	overlay.style.display='block';
	document.body.style.overflow ='hidden';

});
close.addEventListener('click', function (){
	overlay.style.display='none';
	more.classList.remove('more-splash');
	document.body.style.overflow ='';
});
for(i=0;i<btn.length;i++){
	btn[i].addEventListener('click', function(){
		this.classList.add('more-splash');
		overlay.style.display='block';
		document.body.style.overflow ='hidden';
	});
}






});