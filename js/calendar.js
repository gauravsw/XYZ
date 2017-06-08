$(document).ready(function(){
	
	elem = document.querySelectorAll("#yearlyCalList>li");
	current = 0;
	for(var i = 1;i < elem.length;i++) {
		elem[i].style.display = "none";
	}
	
});

function GoBack() {
	
	if(current  == 0) {
		return;
	}
	
	current = current - 1;
	
	for(var i = current + 1 ; i < elem.length ; i++) {
			elem[i].style.display = "none";
	}
	
	for(var i = 0 ; i < current ; i++) {
			elem[i].style.display = "none";
	}
	
	for(var i = current; i < current + 1 ; i++) {
			elem[i].style.display = "block";
	}
	
	$(".scroller-disabled").removeClass("scroller-disabled");
	
	if(current == 0) {
		$(".scroller-nav-prev").addClass("scroller-disabled");
	}
	
}

function GoNext() {
	
	if(current  == elem.length - 1) {
		return;
	}
	
	current = current + 1;
	
	for(var i = current + 1 ; i < elem.length ; i++) {
			elem[i].style.display = "none";
	}
	
	for(var i = 0 ; i < current ; i++) {
			elem[i].style.display = "none";
	}
	
	for(var i = current; i < current + 1 ; i++) {
			elem[i].style.display = "block";
	}
	
	$(".scroller-disabled").removeClass("scroller-disabled");
	
	if(current == 11) {
		$(".scroller-nav-next").addClass("scroller-disabled");
	}
	
}