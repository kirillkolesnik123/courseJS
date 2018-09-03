<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>FirstLesson</title>
</head>
<body>
	<script>
		/*здесь начинается 2 задание)*/ var monthlycost = prompt("Ваш бюджет на месяц?");
		var shopsname = prompt("Название вашего магазина");
		/* здесь 3 начинается*/var mainList = {
			cost: monthlycost,
			nameofshop: shopsname,
			shopGoods: [],
			employers: {},
			Open: true
		}
		/*создал массив shopGoods , чтобы в консоле не выбивало undefined*/
		var shopGoods =['milk', 'juice','apple','pineapple'];
		for(let i = 0; i<5; i++){
			let a = prompt('Какой тип товаров будем продавать?');
			mainList.shopGoods[i] = a;
		}
	
		








		/*здесь начинается 5*/
		alert(mainList.cost/ 30);
		console.log(mainList);
		






	</script>
</body>
</html>