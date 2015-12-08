(function($) {

	var sliderUl = $('div.slider').css('overflow', 'hidden').children('ul'),
			imgs = sliderUl.find('img'),
			imgWidth = imgs[0].width, // 500 
			imgsLen = imgs.length, // 4
			current = 1,
			totalImgsWidth = imgWidth * imgsLen;

	$('#slider-nav').show().find('button').on('click', function(){
		
		var direction = $(this).data('dir'),
				loc = imgWidth; //500

		if (direction === 'next') {
			++ current;
		} else {
			-- current;
		}

		if (current === 0) {		// reverse pass the first image
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

		var unit;
		if (direction && loc !== 0) {
			unit = (direction === 'next') ? '-=' : '+=';
		}
		container.animate({
			'margin-left' : unit ? (unit + loc) : loc
		});

	}

})(jQuery);