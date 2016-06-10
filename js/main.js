$(function() {
	$('#logo, .active').click(function(){
		toggleMenu();
		resetContent();
	});

	$('.layer1').click(function(){
		id = parseInt(this.id)
		contentId = 3;
		active(id, contentId);
		$('.connect-container a').addClass("entrance");
	});
	$('.layer2').click(function(){
		id = parseInt(this.id)
		contentId = 5;
		active(id, contentId);
		$('.about-container > *').addClass("entrance");
	});
	$('.layer3').click(function(){
		id = parseInt(this.id)
		contentId = 1;
		active(id, contentId);
	});
	$('.layer4').click(function(){
		id = parseInt(this.id)
		contentId = 2;
		active(id, contentId);
	});
	slickJs();
});

function slickJs() {
	$('.center').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
}

function toggleMenu() {
	if($('.layer').hasClass('active') ){
		$('.content-layer').removeClass('show-content');
		$('.layer').removeClass('active closed show-content');
		$('.layer').addClass('menu-open');
		for (var i = 0; i < 5; i++) {
			$('.logo').removeClass('point' + i);
		}
		$('.layer3').removeClass('start');
	}
	else if($('.layer').hasClass('menu-open')){
		$('.layer, .logo, .main-title, .clouds').removeClass('menu-open');
		$('.layer3').addClass('start');
	} else {
		$('.layer, .logo, .main-title, .clouds').addClass('menu-open');
		$('.layer3').removeClass('start');
	}
}

function resetContent() {
	$('.connect-container a').removeClass("entrance");
	$('.about-container > *').removeClass("entrance");

}

function active(id, contentId) {
	console.log(id);
	$('#' + id + ', #' + contentId).addClass('active');
	$('#' + contentId + ', [layer='+ contentId +']').addClass('show-content');
	$('.logo').addClass('point' + id);
	var n = id;
	for (var i = 0; i < 4; i++) {
		n += 1;
		if (n === 5) n = 1;
		if (n === id || n === contentId) continue;
		$('#'+n).removeClass('menu-open');
		if(id !== 2) {
			$('#'+n).addClass('closed');
		}

	}
}
