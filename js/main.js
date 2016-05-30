$(function() {
	$('#logo').click(function(){
		toggleMenu();
	})
});

function toggleMenu() {
	$('.layer, .logo').toggleClass("active");
}