function downloadblocks() {
  let styleBlockButton = document.getElementById('styleButton'),
      styleMore = document.getElementsByClassName('styles-2');

  styleBlockButton.addEventListener('click', function(){
    for(let i = 0; i<styleMore.length; i++){
      styleMore[i].style.display='block';
    }
    styleBlockButton.style.display = 'none';
  });


  // Модальные окна popup-consultation&design&gift
  let body = document.getElementsByTagName('body')[0],
      popupConsultationBlock = document.getElementsByClassName('popup-consultation')[0],
      popupDesignBlock = document.getElementsByClassName('popup-design')[0],
      popupClose = document.getElementsByClassName('popup-close'),
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
        popUpAll[i].style.display = 'none'
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
}

module.exports = downloadblocks;