var classes = ["iphone", "ipad", "macbook"];
var i = 0;
morph();

function morph() {
	$('#device').removeClass();
	$('#device').addClass(classes[i]);
	if (i > classes.length - 2){
		i = 0;
		console.log(classes[i]);
	} else { 
		i++;
		console.log(classes[i]);
	};
};

setInterval(morph, 2000);