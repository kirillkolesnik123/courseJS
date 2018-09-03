let lii= document.createElement('li');
lii.classList.add('menu-item');
lii.textContent='Пятый пункт';
console.log(lii);
let ul= document.getElementsByTagName('ul')[0];
console.log(ul);
ul.appendChild(lii);

let ly=document.getElementsByTagName('li');
let changeli= ly[1].parentNode;
changeli.insertBefore(ly[2],ly[1]);

document.body.style.backgroundImage= "url('img/apple_true.jpg')";

let changetitle= document.getElementById('title');
changetitle.innerHTML = changetitle.innerHTML.replace('технику','подлинную технику');
let deleteadvert=document.getElementsByClassName('adv');
let parentadv= deleteadvert[0].parentNode;
parentadv.removeChild(deleteadvert[0]);
let useropinion=prompt('Ваше мнение о технике Apple?');
let putin=document.getElementsByClassName('prompt')[0];
putin.innerHTML= (useropinion);
console.log(useropinion)
