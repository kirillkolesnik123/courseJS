let openbtn =document.getElementById('open-btn');
nameshop_value =document.getElementsByClassName('name-value')[0];
budget_value =document.getElementsByClassName('budget-value')[0];
goods_value =document.getElementsByClassName('goods-value')[0];
items_value =document.getElementsByClassName('items-value')[0];
employers_value =document.getElementsByClassName('employers-value')[0];
discount_value =document.getElementsByClassName('discount-value')[0];
isopen_value =document.getElementsByClassName('isopen-value')[0];
goods_item=document.getElementsByClassName('goods-item');
goods_btn =document.getElementsByTagName('button')[1];
goods_btn.disabled=true;
budget_btn =document.getElementsByTagName('button')[2]
budget_btn.disabled=false;
employers_btn =document.getElementsByTagName('button')[3]
employers_btn.disabled=true;
choose_item=document.querySelector('.choose-item');
timevalue=document.querySelector('.time-value');
countbudgetvalue=document.querySelector('.count-budget-value');
emp123= document.querySelectorAll('.hire-employers-item');

let cost ,
price;

openbtn.addEventListener('click',()=>{
	let timer= setTimeout(start,2000)

});

goods_btn.addEventListener('click', ()=>{
	for (let i = 0;i<goods_item.length;i++) {
		let cc = goods_item[i].value;
		if((typeof(cc)) === "string"  && (typeof(cc)) !== null && cc.length <50) {
			mainList.shopGoods[i] = cc;
			goods_value.textContent = mainList.shopGoods;
			

		} else  {
			i --;
		}
	}
});
function start(){
	cost = prompt("Ваш бюджет на месяц?","");
	while(isNaN(cost) || cost == "" || cost ==' ' || cost ==null) {
		cost = prompt("Ваш бюджет на месяц?","");

	}
	budget_value.textContent = cost;
	nameshop_value.textContent = prompt("Название вашего магазина","").toUpperCase();
	while(nameshop_value ==='string' || nameshop_value == '' || nameshop_value== ' ' || nameshop_value==null) {
		nameshop_value = prompt("Название вашего магазина","");
	}
}
for(i=0;i<goods_item.length;i++){
	goods_item[i].addEventListener('change',()=>{
		goods_btn.disabled=false;
	});
}
choose_item.addEventListener('change', ()=> {
	let items =choose_item.value;
	
	if(isNaN(items) && items !='') {
		mainList.shopitems = items.split(',');
		mainList.shopitems.sort();
		items_value.textContent = mainList.shopitems;

	}

});

timevalue.addEventListener('change', ()=>{
	let time=timevalue.value;

	if(time <0){
		console.log('Такого быть не может!');
		mainList.open=false;
	}	else if (time> 8 && time <20){
		console.log('время работать!');
		mainList.open = true;
	}	else if (time <24){
		console.log('уже слишком поздно!');
		mainList.open=false;
	} else {
		console.log('В сутках только 24 часа!');
		mainList.open=false;
	};

	if(mainList.open==true) {
		isopen_value.style.backgroundColor = 'green'
	}
	else {
		isopen_value.style.backgroundColor = 'red'	
	}
});

budget_btn.addEventListener('click',()=>{
	
	countbudgetvalue.value= (cost / 30)
	
});
for(i=0;i<countbudgetvalue.length;i++){
	countbudgetvalue[i].addEventListener('change',()=>{
		countbudgetvalue.disabled=true;
	});
}

employers_btn.addEventListener('click',()=>{
	for(let i =0; i<emp123.length;i++){
		let name= emp123[i].value;
		mainList.employers[i] = name; 	
		employers_value.textContent += mainList.employers[i] + ',';
	}

});
for(i=0;i<emp123.length;i++){
	emp123[i].addEventListener('change',()=>{
		employers_btn.disabled=false;
	});
}


timevalue.addEventListener('change',()=>{ 
	let time=timevalue.value;

	if(time <0){
		console.log('Такого быть не может!');
		mainList.discount=false;
	}	else if (time> 8 && time <18){
		mainList.discount = false;	
	}   else if (time> 18 && time <20){
		mainList.discount = true;	
	}	else if (time <24){
		console.log('уже слишком поздно!');
		mainList.discount=false;
	} else {
		console.log('В сутках только 24 часа!');
		mainList.discount=false;
	};

	if(mainList.discount==true) {
		discount_value.style.backgroundColor = 'green'
	}
	else {
		discount_value.style.backgroundColor = 'red'	
	}

});


let mainList = {
	cost,
	shopGoods:[],
	employers:{},  
	open: true,
	discount: false,
	shopitems:[],
}

console.log(mainList);

countbudgetvalue.setAttribute("readonly", true);





