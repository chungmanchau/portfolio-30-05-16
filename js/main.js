$(function() {
	$('#logo, .active').click(function(){
		toggleMenu();
	});

	for (var i = 0; i < 5; i++) {
		$('.layer' + i).click(function(){
			if($('.layer' + i))
			active(this.id);
		});
	}
});

function toggleMenu() {
	if($('.layer').hasClass('active') ){
		$('.layer').removeClass('active closed');
		$('.layer').addClass('menu-open');
		for (var i = 0; i < 5; i++) {
			$('.logo').removeClass('point' + i);
		}
		$('.layer3').removeClass('start');
	} 
	else if($('.layer').hasClass('menu-open')){
		$('.layer, .logo, .main-title').removeClass('menu-open');
		$('.layer3').addClass('start');
	} else {
		$('.layer, .logo, .main-title').addClass('menu-open');
		$('.layer3').removeClass('start');
	}
}

function rotateLogo() {
	
}

function active(id) {
	console.log(id);
	id = parseInt(id);
	$('#' + id).addClass('active');
	$('.logo').addClass('point' + id);
	var n = id;
	for (var i = 0; i < 4; i++) {
		n += 1;
		if (n === 5) n = 1;
		if (n === id) continue;
		$('#'+n).removeClass('menu-open');
		$('#'+n).addClass('closed');
	}
}