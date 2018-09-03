let cost ,
shopsname,
time,
price;

function start(){
	cost = prompt("Ваш бюджет на месяц?","");
	while(isNaN(cost) || cost == "" || cost ==' ' || cost ==null) {
		cost = prompt("Ваш бюджет на месяц?","");

	}
	shopsname = prompt("Название вашего магазина","").toUpperCase();
	while(shopsname ==='string' || shopsname == '' || shopsname== ' ' || shopsname==null) {
		shopsname = prompt("Название вашего магазина","");

	}
	time= 21; 
}
start() ;
let mainList = {
	cost,
	shopsname,
	shopGoods: [],
	employers:{},  
	Open: true,
	discount: false,
	shopitems:[],
	chooseGoods: function chooseGoods(){


		for (let i = 0; i < 5; i++) {

			let cc = prompt('Какой тип товаров будем продавать?',"");

			if((typeof(cc)) === "string"  && (typeof(cc)) != null && cc != ''&& cc!=' ' && cc.length <50) {
				console.log("vse верно!");
				mainList.shopGoods[i] = cc; 	
			} else  {
				i= i - 1;
			}
		}
	},
	hireemployers:function hireemployers(){
		for(let i =0; i<4;i++){
			let emp= prompt("Имя сотрудника","");
			if((typeof(emp)) === "string"  && (typeof(emp)) != null && emp != '' && emp !=' ' && emp.length <50) {
				console.log("молодец!");
				mainList.employers[i] = emp; 	
			} else  {
				i= i - 1;
				alert('Попробуй еще раз!');
			}
			mainList.employers[i]=emp;

		}
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
	chooseshopitems: function chooseshopitems(){
		let items = prompt(' перечислети через запятую товары', '');
		while(items==''||items ==' '||items ==null) {
			items = prompt('Перечислите через запятую товары','');
			
		}
		mainList.shopitems = items.split(',');
		mainList.shopitems.push(prompt(' Подождите! еще',''));
		mainList.shopitems.sort();
	},
	tobuy:function tobuy(){
		let arr =mainList.shopitems;
		arr.forEach(function(item,i,arr){
			i=i+1;
			alert( 'У нас вы можете купить '+ i + " : " +item );
		});
	}
}


function list (){
	for (let key in mainList){
		console.log('Наш магазин включает в себя:'+ key+' ,которое имеет значение '+mainList[key] );
	} 

} list();

mainList.chooseGoods();
mainList.workTime();
mainList.costfor1day();
mainList.ShowDiscount();
mainList.chooseshopitems();
mainList.tobuy();
mainList.hireemployers();
console.log(Object.keys(mainList).length<6);
console.log(mainList);





