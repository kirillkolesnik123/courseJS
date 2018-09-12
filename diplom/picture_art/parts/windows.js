function windows(){
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
}
module.exports =windows;