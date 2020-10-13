$('.burger').click(function () {
	$(this).toggleClass('open');
	if ($(".burger").hasClass('open')) {
		$(".mob-menu").slideDown();
	} else {
		$(".mob-menu").slideUp();
	}
});