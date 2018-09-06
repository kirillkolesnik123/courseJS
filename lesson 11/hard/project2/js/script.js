window.addEventListener('DOMContentLoaded', function() {

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];


	function hideTabContent (a) {
		
		for (let i = a; i<tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	function showTabContent(b) {

		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');

		}
	}

	showTabContent(0);


	info.addEventListener('click', function(event) {

		let target = event.target;

		if (target.className == 'info-header-tab') {
			for (let i = 0; i<tab.length; i++) {
				if(target == tab[i]){
					showTabContent(i);
					break;
				}
			}
		}

	});

// Установите правильную дату окончания

	let deadline = "2018-11-28";

// высчитать оставшееся время.

	function getTimeRemaining(eventTime){
		var differenceTime = Date.parse(eventTime) - Date.parse(new Date());
		var secondsLeft = Math.floor( (differenceTime/1000) % 60 );
		var minutesLeft = Math.floor( (differenceTime/1000/60) % 60 );
		var hoursLeft = Math.floor( (differenceTime/(1000*60*60)));
// данные таймера, как многоразовый объект
		return {
			'total': differenceTime,
			'hours': hoursLeft,
			'minutes': minutesLeft,
			'seconds': secondsLeft
		};
	}
	
		console.log(getTimeRemaining(deadline));


// Отобразите часы на странице и остановите их, когда они достигнут нуля
	function setClock(id, eventTime) {
		var timerHtml = document.getElementById(id),
			hours = timerHtml.querySelector('.hours'),
			minutes = timerHtml.querySelector('.minutes'),
			seconds = timerHtml.querySelector('.seconds');

			function updateClock () {
				let eventTimeFunc = getTimeRemaining (eventTime);
				
				if (eventTimeFunc.hours <= 0 && eventTimeFunc.minutes <= 0 && eventTimeFunc.seconds <= 0){
					clearInterval(updateClock);
					hours.innerHTML = "00";
					minutes.innerHTML = "00";
					seconds.innerHTML = "00";
				}

				else {
					hours.innerHTML = ('0'+ eventTimeFunc.hours).slice(-2);

					minutes.innerHTML = ('0'+ eventTimeFunc.minutes).slice(-2);

					seconds.innerHTML = ('0'+ eventTimeFunc.seconds).slice(-2);
				}

			}

			updateClock();

			setInterval(updateClock, 1000);

			
	}

		
	setClock('timer', deadline)



	// pop-up

	let btnMore = document.querySelector(".more"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close"),
		btnDescr = document.getElementsByClassName('description-btn');

	console.log("start for");
	
	for (let i=0; i<btnDescr.length; i++) {
		btnDescr[i].addEventListener('click', function () {
			console.log(i);
			this.classList.add('more-splash');
			overlay.style.display = 'block';
			document.body.style.overflow = 'hidden';
			
		});
		console.log(i);
	}
	console.log("end for");




	// btnDescr[0].onclick = function() {
	// 	this.classList.add('more-splash');
	// 	overlay.style.display = 'block';
	// 	document.body.style.overflow = 'hidden';
	// }

	// console.dir(btnDescr[0]); с одной кнопкой все работает


	btnMore.addEventListener('click', function () {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		btnMore.classList.remove('more-splash');
		let btnDescr2 = document.querySelector('.description-btn.more-splash');
		if (btnDescr2!==null) {
			btnDescr2.classList.remove('more-splash');
		}		
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	});




	// form всплывашка


	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
	message.failure = "Что-то пошло не так...";

	let mForm = document.getElementsByClassName('main-form')[0],
		input = mForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	statusMessage.classList.add('status');
	
	mForm.addEventListener('submit', function (event) {
		event.preventDefault();
		mForm.appendChild(statusMessage);

		//ajax

		let request = new XMLHttpRequest();

		request.open("POST", 'server.php');

		// правильная кодировка для правильной передачи данных

		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formData = new FormData (mForm);

		request.send(formData);

		request.onreadystatechange = function () {
			if (request.readyState<4) {
				statusMessage.innerHTML = "<img src='./img/load.gif'>" + message.loading;
			} 

			else if (request.readyState === 4){
				if (request.status == 200 ) {
					statusMessage.innerHTML = "<img src='./img/cat.png'>"  + messageFormInputs.success;;
					// м.добавлять контент на страницу, менять
				}

				else {
					statusMessage.innerHTML = "<img src='./img/toe.png'>" + message.failure;
				}
			}
		}

		for (let i = 0; i<input.length; i++){
			input[i].value = '';
			// очищаем поля ввода
		}

	});



	// форма инпутов

	// <form id="form">
	// 	<input required type="email" placeholder="Ваша почта">
	// 	<input required type="tel" placeholder="Ваш телефон">
	// 	<button type="submit">Отправить</button>
	// </form>


	let messageFormInputs = new Object();

	messageFormInputs.loading = "Загрузка...";
	messageFormInputs.success = "Данные приняты. Мы свяжемся с Вами в ближайшее время";
	messageFormInputs.failure = "Что-то пошло не так...";

	let formInputs = document.getElementById('form'),
		inputForm = formInputs.getElementsByTagName('input'),
		// inputForm = FormInputs.getElementsByTagName('input'),
		statusMessageForm = document.createElement('div');




	statusMessageForm.classList.add('status');

	formInputs.addEventListener('submit', function (event) {
		event.preventDefault();
		formInputs.appendChild(statusMessageForm);
		//ajax

		let requestInp = new XMLHttpRequest();

		requestInp.open("POST", 'server.php');

		// правильная кодировка для правильной передачи данных

		requestInp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		let formDataInp = new FormData (formInputs);

		console.log(formDataInp);

		requestInp.send(formDataInp);

		requestInp.onreadystatechange = function () {
			if (requestInp.readyState<4) {
				statusMessageForm.innerHTML = "<img src='./img/load.gif'>" + messageFormInputs.loading;
			}

			else if (requestInp.readyState === 4){
				if (requestInp.status == 200 && requestInp.status<300) {
					statusMessageForm.innerHTML = "<img src='./img/cat.png'>" + messageFormInputs.success;
					// м.добавлять контент на страницу, менять
				}

				else {
					statusMessageForm.innerHTML = "<img src='./img/couch.png'>" + messageFormInputs.failure;
				}
			}
		}

		for (let i = 0; i<inputForm.length; i++){
			inputForm[i].value = '';
			// очищаем поля ввода
		}

	});












	

});







