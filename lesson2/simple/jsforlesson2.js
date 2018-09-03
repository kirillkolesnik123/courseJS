let cost = prompt("Ваш бюджет на месяц?");
let shopsname = prompt("Название вашего магазина");
/* здесь 3 начинается*/
let mainList = {
	cost,
	shopsname,
	shopGoods: [],
	employers: {},
	Open: true
		}

/*let i=0;
while (i <3){
	i++;
let сс = prompt('Какой тип товаров будем продавать?');
mainList.shopGoods[i] = сс;
}*/
/*let i =0;
do {let сс = prompt('Какой тип товаров будем продавать?');
   i++;
mainList.shopGoods[i] = сс;   
} while(i<3);*/
for (let i = 0; i < 3; i++) {  
  let a = prompt ('Какой тип товаров будем продавать?', ''); 

 if((typeof(a)) === 'string'    && (typeof(a))   != null   &&    a != ''    &&    a.length < 50       ) {

        console.log('Все верно');
        mainList.shopGoods[i] = a;

               }  else {
                   i--;
               }
}

let daycost =(cost / 30); 
 alert("Ваш дневной бюджет"+daycost);
console.log(mainList);