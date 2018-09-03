$(window).on('load', function(){
	//open modal
	$('.main_btn, .main_btna, a[href="#sheldure"]').click(function(event){
		$('.overlay').fadeIn(400,function (){
			$('.modal').css('display','block').animate({
				opacity: 1,
				top: '20%'
			},200,/*function(){
			$(this).css('display','none');
			$('.overlay').fadeOut(400);
		}*/);
		});
	});
	$('.close').click(function(){
		$('.modal').animate({
			opacity:0,top :'15%'
		},200,function(){
			$(this).css('display','none');
			$('.overlay').fadeOut(400);
		});
	});
});
