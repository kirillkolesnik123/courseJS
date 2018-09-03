let cost ,
shopsname,
time,
price;

function start(){
	cost = prompt("Ваш бюджет на месяц?", '');
	while(isNaN(cost) || cost == "" || cost ==null) {
		cost = prompt("Ваш бюджет на месяц?");

	}
	shopsname = prompt("Название вашего магазина").toUpperCase();
	time= 21;
};
start() ;
let mainList = {
	cost, 
	shopsname,
	shopGoods: [],
	employers: {},
	Open: true,
	discount: false,
	ShopItems: [],
	chooseGoods:function chooseGoods(){


		for (let i = 0; i < 5; i++) {

			let cc = prompt('Какой тип товаров будем продавать?', '');

			if((typeof(cc)) === "string"  && (typeof(cc)) != null && cc != '' && cc.length <50) {
				console.log("vse верно!");
				mainList.shopGoods[i] = cc; 	
			} else  {
				i= i - 1;
			}
		}
	},
	workTime:function workTime(time){
		if(time <0){
			console.log('Такого быть не может!');

		}	else if (time> 8 && time <20){
			console.log('время работать!');
			mainList.open = true;
		}	else if (time <24){
			ocnsole.log('уже слишком поздно!');
		} else{
			console.log('В сутках только 24 часа!');	
		}
	},
	costfor1day:function costfor1day(daycost) {

		var daycost = (cost / 30); 

		alert("Ваш дневной бюджет равен" + daycost)

	},
	ShowDiscount:function ShowDiscount(discount) {

		if (discount) {
			price= cost*0.8;
			alert("Цена со скидкой" +price);
		} else  {
			price = cost;
			alert("У вас нет скидки. С вас" +price);
		}
	},	
	employers:function employers(){
		for(let i =0; i<4;i++){
			let emp= prompt("Имя сотрудника","");
			if((typeof(emp)) === "string"  && (typeof(emp)) != null && emp != '' && emp.length <50) {
				console.log("молодец!");
				mainList.shopGoods[i] = emp; 	
			} else  {
				i= i - 1;
				alert('Попробуй еще раз!');
			}
			mainList.employers[i]=emp;

		}
	},
	chooseShopItems: function chooseShopItems(){
		
		
		let items = prompt('Перечислите через запятую товары','');
		while(isFinite(items)||items ==''||items ==null) {
			items = prompt('Перечислите через запятую товары','');

		}
		let z =prompt('Подождите! Еще','');
		mainList.ShopItems = items.split(',');
		mainList.ShopItems.push(z);
		while(isFinite(z)||z ==''||z ==null) {
			z = prompt('Подождите! Еще','');

		}
		mainList.ShopItems.sort();

	},
	tobuy:function tobuy(){
		let arr =mainList.ShopItems;
		arr.forEach(function(item,i,arr){
			i=i+1;
			alert( 'У нас вы можете купить'+ i + ": " + item + " (массив:" + arr + ")" );
		});
	},
	list: function(){
		let pp=mainList.shopGoods;
		for (let key in pp){
			alert('Наш магазин включает в себя:'+ pp[key] );
		}

	} 

}
console.log(mainList);





