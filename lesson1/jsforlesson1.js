var cost = prompt("Ваш бюджет на месяц?");
var shopsname = prompt("Название вашего магазина");
/* здесь 3 начинается*/
var mainList = {
	cost,
	shopsname,
	shopGoods: [],
	employers: {},
	Open: true
		}

for (let i = 0; i<4;i++){

let сс = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[i] = сс; 	

}  
 

var daycost =(cost / 30); 
 prompt("Ваш бюджет на день.Жми ОК и все поймешь!",daycost);
console.log(mainList);
		




