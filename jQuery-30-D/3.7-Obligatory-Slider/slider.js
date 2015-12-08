(function($) {

	var sliderUl = $('div.slider').css('overflow', 'hidden').children('ul'),
			imgs = sliderUl.find('img'),
			imgWidth = imgs[0].width,
			imgsLen = imgs.length,
			current = 1,
			totalImgsWidth = imgWidth * imgsLen;

	$('#slider-nav').show().find('button').on('click', function(){
		console.log('click');
		var direction = $(this).data('dir'),
				loc = imgWidth; //500

		(direction==='next') ? ++current : --current;

		// reverse pass the first image
		if (current === 0) {
			current = imgsLen;
			direction = 'next';
			loc = totalImgsWidth - imgWidth;
		} else if (current - 1 === imgsLen) { // forward pass the last image
			current = 1;
			loc = 0;
		}

		transition(sliderUl, loc, direction);

	});

	function transition (container, loc, direction) {
		console.log('trans');
		var unit;
		if (direction && loc !==0) {
			unit = (direction === 'next') ? '-=' : '+=';
		}
		container.animate({
			'margin-left' : unit ? (unit + loc) : loc
		});

	}

})(jQuery);