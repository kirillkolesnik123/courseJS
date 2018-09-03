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

/*let i=0;
while (i <4){
	i++;
let сс = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[i] = сс;

}*/
/*let i =0;
do {let сс = prompt('Какой тип товаров будем продавать?');
   i++;
mainList.shopGoods[i] = сс;   
} while(i<4);*/



for (let i = 0; i<3;i++){

let сс = prompt('Какой тип товаров будем продавать?');

if((typeof(cc)) === "string"  && cc != '' && cc.length <50) {
	console.log("vse верно!");
mainList.shopGoods[i] = сс; 	
} else if ((typeof(cc)) != null) {
	console.log('не верно!');
	mainList.shopGoods[i] = сс;
}


}
  
		

var daycost =(cost / 30); 
 prompt("Ваш бюджет на день.Жми ОК и все поймешь!",daycost);
console.log(mainList);
		




