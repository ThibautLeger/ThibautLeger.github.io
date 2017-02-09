$(document).ready(function(){
	$('.carousel-two-items').slick({
		arrows: false,
		infinite: false,
		centerPadding: '15px',
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					slidesToShow: 1
				}
			}
		]
	});
	$('.carousel-three-items').slick({
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					centerPadding: '120px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					centerPadding: '30px',
					slidesToShow: 1
				}
			}
		]
	});
});