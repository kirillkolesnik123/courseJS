function accordeon() {
 let accordionHead = document.getElementsByClassName('accordion-heading'),
      accordionBlock = document.getElementsByClassName('accordion-block');


  for (let i=0; i<accordionHead.length; i++) {
    accordionHead[i].addEventListener('click', function(e){
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
}

module.exports = accordeon;