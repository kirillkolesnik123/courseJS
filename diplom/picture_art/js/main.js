window.addEventListener('DOMContentLoaded',function(){

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

	

});
	

	
	


	


	


