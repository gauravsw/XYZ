$(document).ready(function(){
    
	$("#menu").hide();
    
    $("#trigger").click(function() {
		console.log("H");
        $("#menu").slideToggle();
        $("#menu").toggleClass("active");       
    });

	
    
    $(".close-menu").click(function() {
        $("#menu").slideToggle();
        $("#menu").toggleClass("active");      
    });

    setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
	$("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
	
	$("#submit").attr('disabled', 'disabled');
	$("form").keyup(function() {
		// To Disable Submit Button
		$("#submit").attr('disabled', 'disabled');
		// Validating Fields
		var name = $("#name").val();
		var message = $("#message").val();
		if (!(name == "" || message == "")) {
		// To Enable Submit Button
			$("#submit").removeAttr('disabled');
			$("#submit").css({
			"cursor": "pointer",
			"box-shadow": "1px 0px 6px #333"
			});

		}
	});
	// On Click Of Submit Button
	$("#submit").click(function() {
		$("#submit").css({
			"cursor": "default",
			"box-shadow": "none"
		});
		alert("Form Submitted Successfully..!!");
	});
    
});
