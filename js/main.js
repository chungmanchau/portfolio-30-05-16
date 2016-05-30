$(function() {
	$('#logo, .active').click(function(){
		toggleMenu();
	});

	for (var i = 0; i < 5; i++) {
		$('.layer' + i).click(function(){
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
	} 
	else if($('.layer').hasClass('menu-open')){
		$('.layer, .logo').removeClass('menu-open');
	} else {
		$('.layer, .logo').addClass('menu-open');
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