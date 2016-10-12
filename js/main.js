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


function active(id, contentId) {
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
};


function slickJs() {
	$('.center').slick({
		centerMode: true,
		slidesToShow: 3,
		infinite: true,
		arrows: false,
		focusOnSelect: true

	});

};

function toggleMenu() {
	if($('.layer').hasClass('active') ){

		$('.content-layer').removeClass('show-content');
		$('.layer, .layers-container').removeClass('active closed show-content');
		$('.layer , .layers-container').addClass('menu-open');
		for (var i = 0; i < 5; i++) {
			$('.logo').removeClass('point' + i);
		}
		$('.layer3').removeClass('start');
	}
	else if($('.layer').hasClass('menu-open')){
		$('.layer, .layers-container, .logo, .main-title, .clouds').removeClass('menu-open');
		$('.layer3').addClass('start');
	} else {
		$('.layer, .layers-container, .logo, .main-title, .clouds').addClass('menu-open');
		$('.layer3').removeClass('start');
	}
};

function resetContent() {
	$('.connect-container a').removeClass("entrance");
	$('.about-container > *').removeClass("entrance");

};