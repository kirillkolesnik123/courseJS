'use strict';
window.onload = function() {


	// слайдер верхний

	let slideIndex = 0,
	slides = document.getElementsByClassName('main-slider-item');


	function showSlide(){
		// чтобы после последнего слайда показывался 1-ый.
		if (slideIndex==slides.length) {
			slideIndex = 0;
		}
		

		let prevSlideIndex = slideIndex - 1;
		if (prevSlideIndex==-1) {
			prevSlideIndex = slides.length-1;
		}

		slides[slideIndex].classList.remove('fadeOutDown');
		slides[slideIndex].classList.add('fadeIn');
		
		slides[prevSlideIndex].classList.add('fadeOutDown');
		slides[prevSlideIndex].classList.remove('fadeIn');

		
		setTimeout(function(){
			slides[slideIndex].style.display = "flex";
			slides[prevSlideIndex].style.display = "none";

		}, 500);

	}
 	function plusSlides(){
		slideIndex++;
	 	showSlide();
	}
	
	setInterval(function() {
	  plusSlides();
	},2500);
	showSlide();

	// слайдер нижний

	let slideIndexFeedback = 0,
	lastDirection = 1,
		// timerIdFeed,
		slidesFeedback  = document.getElementsByClassName('feedback-slider-item'),
		prevFeedback  = document.querySelector('.main-prev-btn'),
		nextFeedback  = document.querySelector('.main-next-btn'),
		feedback = document.querySelector('.feedback-slider');

		function showSlideFeedback (delta){
			let prevSlideIndexFeedback = slideIndexFeedback;
			slideIndexFeedback = slideIndexFeedback + delta;

			if (slideIndexFeedback>slidesFeedback.length-1) {
				slideIndexFeedback = 0;
			}
			if (slideIndexFeedback<0) {
				slideIndexFeedback = slidesFeedback.length-1;
			}

			slidesFeedback[slideIndexFeedback].classList.remove('fadeOutRight','fadeOutLeft');
			
			slidesFeedback[slideIndexFeedback].classList.add('fadeIn');			
			
			
			if (delta>0) {
				slidesFeedback[prevSlideIndexFeedback].classList.add('fadeOutRight');
			}
			if (delta<0) {
				slidesFeedback[prevSlideIndexFeedback].classList.add('fadeOutLeft');
			}
			
			slidesFeedback[prevSlideIndexFeedback].classList.remove('fadeIn');
			
			if (delta===0) {
				slidesFeedback[prevSlideIndexFeedback].style.display = 'none';
				slidesFeedback[slideIndexFeedback].style.display = 'flex';
			}
			else {
				setTimeout(function(){
					slidesFeedback[prevSlideIndexFeedback].style.display = 'none';
					slidesFeedback[slideIndexFeedback].style.display = 'flex';
				},300);
			}
			
		}

		showSlideFeedback(0);

		prevFeedback.addEventListener('click', function(){
			lastDirection = -1;
			showSlideFeedback(-1);

		});
		
		nextFeedback.addEventListener('click', function(){
			lastDirection = 1;
			showSlideFeedback(1);
		});


		var timerIdFeed = setInterval(function() {
			showSlideFeedback (lastDirection);
		},3000);



		feedback.addEventListener('mouseenter', function(){
			clearInterval(timerIdFeed);
			
		});

		feedback.addEventListener('mouseleave', function(){
			timerIdFeed = setInterval(function() {
				showSlideFeedback (lastDirection);
			},3000);
		});


		// аккордеон

		let 	accordionHead = document.getElementsByClassName('accordion-heading'),
		accordionBlock = document.getElementsByClassName('accordion-block');


		for (let i=0; i<accordionHead.length; i++) {
			accordionHead[i].addEventListener('click', function(){
				for(let c=0; c<accordionHead.length; c++){
					accordionHead[c].style.color = '#333';
					accordionHead[c].querySelector("span").style.borderBottom = '2px dotted #333';
				}

				for(let a=0; a<accordionBlock.length; a++){
					if (a!=i) {
						accordionBlock[a].style.display = 'none';
					}
				}

				if (accordionBlock[i].style.display == 'flex') {
					accordionBlock[i].style.display = 'none';
				} else {
					accordionBlock[i].style.display = 'flex';
					accordionHead[i].style.color = '#f442e5';
					accordionHead[i].querySelector("span").style.borderColor  = 'transparent';
					accordionBlock[i].classList.add('slideInDown');
				}
			});
		}
		// фильтрация блоков

let all = document.getElementsByClassName('all'),
girl = document.getElementsByClassName('girl'),
chef = document.getElementsByClassName('chef'),
guy = document.getElementsByClassName('guy'),
lovers = document.getElementsByClassName('lovers');

let portfolioNo = document.querySelector('.portfolio-no'),
portfolioMenu = document.getElementsByClassName('portfolio-menu')[0],
portfolioMenuLi = portfolioMenu.querySelectorAll('li'),
portfolioBlock = document.getElementsByClassName('portfolio-block');

for(let i = 0; i<all.length; i++){
	all[i].style.display = 'block';
}

function hideAllBlocks() {
	for (let i=0; i< portfolioBlock.length; i++) {
		portfolioBlock[i].style.display = "none";
	}
}

portfolioMenu.addEventListener('click', function(e) {
	if (e.target && e.target.tagName == 'LI') {
		for(let i = 0; i<portfolioMenuLi.length; i++){
			portfolioMenuLi[i].classList.remove('active');
			e.target.classList.add('active');
		}

		if (e.target.className.indexOf('allBtn')!==-1) {
			for(let i = 0; i<all.length; i++){
				all[i].style.display = 'block';
			}
		}
		if (e.target.className.indexOf('loversBtn')!==-1) {
			hideAllBlocks();
			for(let i = 0; i<lovers.length; i++){
				lovers[i].style.display = 'block';
			}
		}

		if (e.target.className.indexOf('chefBtn')!==-1) {
			hideAllBlocks();
			for(let i=0; i<chef.length; i++){
				chef[i].style.display = 'block';
			}
		}

		if (e.target.className.indexOf('guyBtn')!==-1) {
			hideAllBlocks();
			for(let i=0; i<guy.length; i++){
				guy[i].style.display = 'block';
			}
		}

		if (e.target.className.indexOf('girlBtn')!==-1) {
			hideAllBlocks();
			for(let i=0; i<girl.length; i++){
				girl[i].style.display = 'block';
			}
		}

		if (e.target.className.indexOf('grandmotherBtn')!==-1 || e.target.className.indexOf('granddadBtn')!==-1) {
			hideAllBlocks();
			portfolioNo.style.display = 'block';
		}
	}
});

	// картинки при наведении

	let images = document.createElement('img'),
	picBlocks = document.getElementsByClassName('sizes-block');
	
	images.style.position = 'absolute';
	images.style.top = '0';
	images.style.left = '0';
	images.style.right = '0';
	images.style.bottom = '0';

	picBlocks[0].addEventListener('mouseenter', function(){
		picBlocks[0].appendChild(images);
		images.src = './img/sizes-1-1.png';
	});

	picBlocks[0].addEventListener('mouseleave', function(){
		picBlocks[0].removeChild(images);
	});

	picBlocks[1].addEventListener('mouseenter', function(){
		picBlocks[1].appendChild(images);
		images.src = './img/sizes-2-1.png';
	});

	picBlocks[1].addEventListener('mouseleave', function(){
		picBlocks[1].removeChild(images);
	});

	picBlocks[2].addEventListener('mouseenter', function(){
		picBlocks[2].appendChild(images);
		images.src = './img/sizes-3-1.png';
	});

	picBlocks[2].addEventListener('mouseleave', function(){
		picBlocks[2].removeChild(images);
	});

	picBlocks[3].addEventListener('mouseenter', function(){
		picBlocks[3].appendChild(images);
		images.src = './img/sizes-4-1.png';
	});

	picBlocks[3].addEventListener('mouseleave', function(){
		picBlocks[3].removeChild(images);
	});




	// Подгрузка блоков

	let styleBlockButton = document.getElementById('styleButton'),
		styleMore = document.getElementsByClassName('styles-2');

		styleBlockButton.addEventListener('click', function(){
			for(let i = 0; i<styleMore.length; i++){
				styleMore[i].style.display='block';
		}
		styleBlockButton.style.display = 'none';
	});

		// гамбургер

	let mobileBtn = document.getElementById('burger'),
			mobileMenu = document.getElementById('burger-menu'),
			headerMenu = document.getElementById('header-menu');

	function mobileBtnCheck() {
		if (screen.width > 991) {
			mobileBtn.style.display = 'none';
			mobileMenu.style.display = 'none';
			headerMenu.style.display = 'block';
		} else{
			mobileBtn.style.display = 'block';
			headerMenu.style.display = 'none';
			mobileMenu.style.display = 'none';				
		}
	}

	mobileBtnCheck();

	window.addEventListener('resize', mobileBtnCheck);

	mobileBtn.addEventListener('click', function(){
		if (mobileMenu.style.display == 'block') {
			mobileMenu.classList.add('hinge');
			setTimeout(function(){
				mobileMenu.style.display = 'none';
			}, 90);
		} else {
			mobileMenu.style.display = 'block';
			mobileMenu.classList.remove('hinge');
		}		
	});

	// калькулятор

	let size = document.getElementById('size'),
			material = document.getElementById('material'),
			options = document.getElementById('options'),
			promocode = document.getElementById('promocode'),
			calcPriceValue = document.getElementById('calc-price-value'),
			calcPriceText = document.getElementById('calc-price-none'),
			price = 0,
			work = 5000;


	function handleChange () {
		if (size.selectedIndex === '' || material.selectedIndex === '') {
			calcPriceText.style.display = 'block';
			calcPriceValue.style.display = 'none';
		} else if (options.selectedIndex === '' && promocode.value === ''){
			price = parseInt(size.value) + parseInt(material.value) + work;
			calcPriceText.style.display = 'none';
			calcPriceValue.style.display = 'block';
			calcPriceValue.innerHTML = price;
		} else if (size.selectedIndex !== '' && material.value !== ''){
			price = parseInt(size.value) + parseInt(material.value);
			calcPriceText.style.display = 'none';
			calcPriceValue.style.display = 'block';
			calcPriceValue.innerHTML = price;
		} 
		else if (options.selectedIndex !== '' && promocode.value === ''){
			price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
			calcPriceText.style.display = 'none';
			calcPriceValue.style.display = 'block';
			calcPriceValue.innerHTML = price;
		} else if (options.selectedIndex === '' && promocode.value === 'IWANTPOPART'){
			let discount = Math.round(((parseInt(size.value) + parseInt(material.value) + work)*30)/100);
			price = (parseInt(size.value) + parseInt(material.value) + work);
			calcPriceText.style.display = 'none';
			calcPriceValue.innerHTML = price - discount;
		} else {
			let discount = Math.round(((parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work)*30)/100);
			price = parseInt(size.value) + parseInt(material.value) + parseInt(options.value) + work;
			calcPriceText.style.display = 'none';
			calcPriceValue.style.display = 'block';
			calcPriceValue.innerHTML = price - discount;
		}
	}

	size.addEventListener('change', function(){
		handleChange ();
	});

	material.addEventListener('change', function(){
		handleChange ();
	});

	options.addEventListener('change', function(){
		handleChange ();
	});

	promocode.addEventListener('change', function(){
		handleChange ();
	});

	
	// Модальные окна popup-consultation&design&gift
	let body = document.getElementsByTagName('body')[0],
			popupConsultationBlock = document.getElementsByClassName('popup-consultation')[0],
			popupDesignBlock = document.getElementsByClassName('popup-design')[0],
			popUpAll = document.querySelectorAll('.popUpAll'),
			gift = document.getElementById('gift'),
			popupGift = document.querySelector('.popup-gift'),
			indexOpenModal = false;

	body.addEventListener('click', function(e){
		if (e.target && e.target.id == 'popUpConsultBtn') {
			popupConsultationBlock.style.display = 'block';
			indexOpenModal = true;
		}
		if (e.target && e.target.id == 'popupClose') {
			for(let i = 0; i<popUpAll.length; i++){
				popUpAll[i].style.display = 'none';
			}
			indexOpenModal = true;
		}
		if (e.target && e.target.id == 'buttonDesign') {
			popupDesignBlock.style.display = 'block';
			indexOpenModal = true;
		}
		if (e.target && e.target.id == 'gift') {
			popupGift.style.display = 'block';
			gift.style.display = 'none';
			indexOpenModal = true;
		}
		if ((e.target && e.target.id == 'popupGift') || (e.target && e.target.id == 'popupDesignBlock') || (e.target && e.target.id == "popupConsultationBlock")) {
			popupGift.style.display = 'none';
			popupDesignBlock.style.display = 'none';
			popupConsultationBlock.style.display = 'none';
			indexOpenModal = true;
		}

	});

	// Заполнение имени и комментария - только на русском языке.

	let message = new Object();

	message.loading = "Загрузка...";
	message.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
	message.failure = "Что-то пошло не так... ";
	let statusMessage = document.createElement('div');


	let consultationForm = document.querySelectorAll('.consultation-form')[0],
			popupConsultationForm = document.querySelectorAll('.popup-consultation-form')[0],
			designForm = document.querySelectorAll('.design-form')[0],
			formNoneDesign = document.getElementsByClassName('form-none-design')[0],
			formNoneConsultation = document.querySelector('.form-none-consultation'),
			telDesign = document.getElementById('telDesign'),
			telConsultationPopUp = document.getElementById('telConsultationPopUp'),
			telConsultation = document.getElementById('telConsultation'),
			inputText = document.getElementsByClassName('input-text');
			
			for (let i = 0; i<inputText.length; i++){
				inputText[i].addEventListener('input', function(){
					this.value = this.value.replace(/[A-Za-z]+$/g, '');
				});
			}

	function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
    	elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
	}

	function mask(event) {
    let matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) {
    	val = def;
    }
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
   if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
	}

	telDesign.addEventListener("input", mask, false);
	telDesign.addEventListener("focus", mask, false);
	telDesign.addEventListener("blur", mask, false);
	telConsultationPopUp.addEventListener("input", mask, false);
	telConsultationPopUp.addEventListener("focus", mask, false);
	telConsultationPopUp.addEventListener("blur", mask, false);
	telConsultation.addEventListener("input", mask, false);
	telConsultation.addEventListener("focus", mask, false);
	telConsultation.addEventListener("focus", mask, false);

	consultationForm.addEventListener('submit', function(e){
		e.preventDefault();
		consultationForm.appendChild(statusMessage);

		// ajax

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData = new FormData (consultationForm);
		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState<4) {
				statusMessage.innerHTML = "<p>" + message.loading + "</p> " + "<img src='./img/load.gif'>";
				statusMessage.style.textAlign = 'center';
				statusMessage.style.marginTop = '30px';
			} else if (request.readyState === 4){
				if (request.status == 200) {
					statusMessage.innerHTML = "<p>" + message.success + "</p>";
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';
				} else {
					statusMessage.innerHTML = "<p>" + message.failure + "</p>" + "<img src='./img/toe.png'>";
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';
				}
			}
		};
	});

	designForm.addEventListener('submit', function(e){
		e.preventDefault();
		designForm.appendChild(statusMessage);

		// ajax

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData = new FormData (designForm);
		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState<4) {
				statusMessage.innerHTML =message.loading;
				statusMessage.style.textAlign = 'center';
				statusMessage.style.marginTop = '30px';
			} else if (request.readyState === 4){
				if (request.status == 200) {
					formNoneDesign.style.display = 'none';
					statusMessage.innerHTML = message.success;
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';					
				} else {
					formNoneDesign.style.display = 'none';
					statusMessage.innerHTML = message.failure;
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';
				}
			}
		};
	});


	popupConsultationForm.addEventListener('submit', function(e){
		e.preventDefault();
		popupConsultationForm.appendChild(statusMessage);

		// ajax

		let request = new XMLHttpRequest();
		request.open("POST", 'server.php');

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		let formData = new FormData (popupConsultationForm);
		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState<4) {
				statusMessage.innerHTML =message.loading;
				statusMessage.style.textAlign = 'center';
				statusMessage.style.marginTop = '30px';
			} else if (request.readyState === 4){
				if (request.status == 200) {
					formNoneConsultation.style.display = 'none';
					statusMessage.innerHTML = message.success;
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';
				} else {
					formNoneConsultation.style.display = 'none';
					statusMessage.innerHTML = message.failure;
					statusMessage.style.textAlign = 'center';
					statusMessage.style.marginTop = '30px';
				}
			}
		};
	});

	// долистал до конца и 60 секунд

	let endScrollHeight = document.body.scrollHeight - document.documentElement.clientHeight;

	window.addEventListener('scroll', function(){
		if ((window.pageYOffset >= endScrollHeight) && indexOpenModal === false) {
			popupGift.style.display = 'block';
			gift.style.display = 'none';
		}
	});

	let minutePopup = setTimeout(function(){
		if (indexOpenModal === false) {
			popupConsultationBlock.style.display = 'block';
		} else{
			clearInterval(minutePopup);
		}
	}, 60000);

	
};

