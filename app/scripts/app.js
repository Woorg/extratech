import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';

(function ($) {
	svg4everybody();


	$(function () {
		const hSlider = $('.hero__slider');
		hSlider.slick({
			arrows: false,
			dots: true
		});

	});

})(jQuery);




