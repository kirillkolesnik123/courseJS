function filterblock() {
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
}

module.exports = filterblock;