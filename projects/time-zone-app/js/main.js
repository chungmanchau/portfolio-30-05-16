$('.options').click(function(){
	if($('.content-wrapper').hasClass('list-view')){
		$('.content-wrapper').removeClass('list-view');
		$('.content-wrapper').addClass('grid-view');
	} else {
		$('.content-wrapper').removeClass('grid-view');
		$('.content-wrapper').addClass('list-view');
	}
});