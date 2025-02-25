$('.item__button').on('click', function(){
	$(this).toggleClass('is-active');
});

$('.advantages__items').slick({
	responsive: [
		{
			breakpoint: 9999,
			settings: "unslick",
		},
		{
			breakpoint: 1019,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				dots: true,
			}
		},
		{
			breakpoint: 699,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			}
		},
	]
});
