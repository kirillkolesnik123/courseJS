let AutoCountry ={};
AutoCountry = function (){
	this.minChars=2;
	this.field=null;
	this.countryLoopId=0;
	this.helper = null;
	this.helperContent ='';
}
AutoCountry.prototype={
	init:function(idOfTheField){
		this.field= document.getElementById(idOfTheField);
		if(!this.field){
			alert('Неверный инпут!');
		}else{
			this.createHelper();
			this.field.onfocus = this.onFieldIn;
			this.field.onblur=this.onFieldOut;
		}
	},
	onFieldIn:function(){
		AC.loop();
	},
	onFieldOut:function(){
		clearTimeout(AC.contryLoopId);
		setTimeout("AC.hideHelper()", 600);
	},
	loop:function(){
		let list1='';
		let value= AC.field.value;
		if(value.length>= this.minChars){
			let numOfCountries= countries.length;
			for(let i=0; i<numOfCountries;i++){
				if(value.toLowerCase()== countries[i].substr(0,value.length).toLowerCase()){
					list1 +='<a href="javascript:AC.setCountry(\'' + countries[i] + '\');">' + countries[i] + '</a>'
				}
			}
		}
		if(list1 !=''){
			if(this.helperContent !=list1){
				this.helperContent=list1;
				this.helper.innerHTML= this.helperContent;
			}
			this.showHelper();
		}else{
			this.hideHelper();
		}
		AC.countryLoopId= setTimeout('AC.loop()',200);
	},
	setCountry:function(country){
		this.field.value=country;
		this.hideHelper();

	},
	createHelper:function() {
		this.helper = document.createElement("div");
		this.helper.style.width = (this.field.offsetWidth - 22) + "px";
		this.helper.setAttribute("id", "helper");
		this.helper.innerHTML = "";
		document.body.appendChild(this.helper);
		this.positionHelper();
		this.hideHelper();
	},
	positionHelper:function() {
		var position = {x:7, y:0};
		var e = this.field;
		while(e) {
			position.x += e.offsetLeft;
			position.y += e.offsetTop;
			e = e.offsetParent;
		}
		this.helper.style.left = position.x + "px";
		this.helper.style.top = (position.y + this.field.offsetHeight)+ "px";
	},
	showHelper:function() {
		this.helper.style.display = "block";
	},
	hideHelper:function() {
		this.helper.style.display = "none";
	}
}
let AC= new AutoCountry();
let countries = ["Австралия", "Австрия", "Азербайджан", "Албания", "Алжир", "Ангола", "Андорра", "Антигуа и Барбуда", "Антильские острова", "Аргентина", "Армения", "Афганистан", "Багамские острова", "Бангладеш", "Барбадос", "Бахрейн", "Белиз", "Белоруссия", "Бельгия", "Бенин", "Болгария", "Боливия", "Босния и Герцеговина", "Ботсвана", "Бразилия", "Буркина-Фасо", "Бурунди", "Бутан", "Вануату", "Ватикан", "Великобритания", "Венгрия", "Венесуэла", "Вьетнам", "Габон", "Гаити", "Гайана", "Гамбия", "Гана", "Гватемала", "Гвинея", "Гвинея-Бисау", "Германия", "Голландия", "Гондурас", "Гонконг", "Гренада", "Гренландия", "Греция", "Грузия", "Гуам", "Дания", "Демократическая Республика Конго", "Джибути", "Доминиканская республика", "Египет", "Замбия", "Западная Сахара", "Зимбабве", "Израиль", "Индия", "Индонезия", "Иордания", "Ирак", "Иран", "Ирландия", "Исландия", "Испания", "Италия", "Йемен", "Кабо-Верде", "Казахстан", "Камбоджа", "Камерун", "Канада", "Катар", "Кения", "Кипр", "Киргизия", "Кирибати", "Китай", "КНДР", "Колумбия", "Коморские острова", "Коста-Рика", "Кот-д'Ивуар", "Куба", "Кувейт", "Лаос", "Латвия", "Лесото", "Либерия", "Ливан", "Ливия", "Литва", "Лихтенштейн", "Люксембург", "Маврикий", "Мавритания", "Мадагаскар", "Македония", "Малави", "Малайзия", "Мали", "Мальдивы", "Мальта", "Марокко", "Мартиника", "Мексика", "Микронезия", "Мозамбик", "Молдавия", "Монако", "Монголия", "Мьянма", "Намибия", "Непал", "Нигер", "Нигерия", "Никарагуа", "Новая Зеландия", "Новая Каледония", "Норвегия", "ОАЭ", "Оман", "Пакистан", "Палестина", "Панама", "Папуа-Новая Гвинея", "Парагвай", "Перу", "Польша", "Португалия", "Пуэрто-Рико", "Республика Конго", "Республика Корея", "Россия", "Руанда", "Румыния", "Сальвадор", "Сан-Марино", "Сан-Томе и Принсипи", "Саудовская Аравия", "Свазиленд", "Сенегал", "Сент-Китс и Невис", "Сент-Люсия", "Сербия", "Сингапур", "Сирия", "Словакия", "Словения", "Соломоновы острова", "Сомали", "Судан", "Суринам", "США", "Сьерра-Леоне", "Таджикистан", "Таиланд", "Тайвань", "Танзания", "Того", "Тонга", "Тринидад и Тобаго", "Тунис", "Туркменистан", "Турция", "Уганда", "Узбекистан", "Украина", "Уругвай", "Фиджи", "Филиппины", "Финляндия", "Франция", "Французская Гвиана", "Хорватия", "Центральноафриканская Республика", "Чад", "Черногория", "Чехия", "Чили", "Швейцария", "Швеция", "Шри-Ланка", "Эквадор", "Экваториальная Гвинея", "Эритрея", "Эстония", "Эфиопия", "ЮАР", "Ямайка", "Япония"];
