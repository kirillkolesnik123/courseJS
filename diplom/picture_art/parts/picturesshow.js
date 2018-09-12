function picturesshow(){
// картинки при наведении

	let images = document.createElement('img'),
	picBlocks = document.getElementsByClassName('sizes-block');
	
	images.style.position = 'absolute';
	images.style.top = '0';
	images.style.left = '0';
	images.style.right = '0';
	images.style.bottom = '0';

	picBlocks[0].addEventListener('mouseenter', function(){
		picBlocks[0].appendChild(images);
		images.src = './img/sizes-1-1.png';
	});

	picBlocks[0].addEventListener('mouseleave', function(){
		picBlocks[0].removeChild(images);
	});

	picBlocks[1].addEventListener('mouseenter', function(){
		picBlocks[1].appendChild(images);
		images.src = './img/sizes-2-1.png';
	});

	picBlocks[1].addEventListener('mouseleave', function(){
		picBlocks[1].removeChild(images);
	});

	picBlocks[2].addEventListener('mouseenter', function(){
		picBlocks[2].appendChild(images);
		images.src = './img/sizes-3-1.png';
	});

	picBlocks[2].addEventListener('mouseleave', function(){
		picBlocks[2].removeChild(images);
	});

	picBlocks[3].addEventListener('mouseenter', function(){
		picBlocks[3].appendChild(images);
		images.src = './img/sizes-4-1.png';
	});

	picBlocks[3].addEventListener('mouseleave', function(){
		picBlocks[3].removeChild(images);
	});
}
module.exports =picturesshow;