$(document).ready(function() {


	// var windowHeight = $(window).height();	

	// homePanelHeight(windowHeight);



	$("#search-prompt").click(function() {
		
		$('#search-container').addClass('active');
		setTimeout(function(){ $('#s').focus(); }, 500);

		console.log('search');

		return false;
	});

	$('#search-container .close').click(function() {
		$('#search-container').removeClass('active');
		return false;
	});


	$('#search-container input[type="text"]').on('keydown', function(evt) {
		$(this).addClass('typing');
	});


	// No click in menu
	$(".noclick > a").click(function() {
		return false;
	});


	// Responsive embeds
	$(".text-module iframe").parent().fitVids();


	// Slide Out Menu
	$("#hamburger").click(function() {
		$("#slide_out").fadeToggle();
		return false;
	});

	$("#slide_out .close").click(function() {
		$("#slide_out").fadeToggle();
		return false;
	});

	$('#slide_out #menu-slide li.menu-item-has-children > a').click(function() {


		// if ($(window).width() < 991) {
			
			if ( $(this).hasClass( "active" ) ) {
				// $(this).parent().find('.sub-menu').first().slideUp();
				$(this).removeClass('active');
			} else {
				$('#slide_out').find('.sub-menu').slideUp();
				$('#slide_out').find('.active').removeClass('active');
				$(this).parent().find('.sub-menu').first().slideDown();
				$(this).addClass('active');
				return false;
			}
	
		// }
	});






	$('[data-toggle=tab]').click(function(e){
		if($(this).parent().hasClass('active')){

			e.preventDefault();
			e.stopPropagation();

			$(this).parent().removeClass('active');

			$($(this).attr("href")).removeClass('active');
			$($(this).attr("href")).removeClass('in');

			$(this).attr("aria-expanded", false);
		}
	})


	$("#newsletter form").submit(function(e) {
	    e.preventDefault(); // avoid to execute the actual submit of the form.
	    var url = "/newsletter.php"; 
	    $.ajax({
	           type: "POST",
	           url: url,
	           data: $("#newsletter form").serialize(), // serializes the form's elements.
	           success: function(data) {
		           	$('#newsletter form').fadeOut(function() {
		           		$("#newsletter .alert").fadeIn();	
		           	});		           			           
	           }
	    });
	});



	// Load Tab content dynamically
	// $('#tab1').load('/tab1Content', function() {
	// 	$('.tabs').tabs(); //reinitialize tabs
	// });

	// $('.tabs').bind('change', function(e) {
	// 	var pattern=/#.+/gi //set a regex pattern (all the things after "#").
	// 	var contentID = e.target.toString().match(pattern)[0]; //find pattern

	// 	$(contentID).load('/'+contentID.replace('#',''), function(){
	// 		$('.tabs').tabs(); //reinitialize tabs
	// 	});
	// }); 




	// $('#slide_out ul li.menu-item-has-children > a').click(function() {

	// 	$(this).find('.sub-menu').slideUp();

	// 	if ( $(this).hasClass( "active" ) ) {
	// 		$(this).parent().find('.sub-menu').first().slideUp();
	// 		$(this).removeClass('active');
	// 	} else {
	// 		$(this).parent().find('.sub-menu').first().slideDown();
	// 		$(this).addClass('active');
	// 	}

	// 	return false;
	// });
	// End slide out menu







});








// Functions

// Adjust home panel height
// function homePanelHeight(windowHeight) {
// 	// console.log(windowHeight);
	
// 	$("#home-panel").css("height", windowHeight);
// 	// $("#home-panel .center").css("top", (windowHeight/2));
// 	$('#header').attr('data-offset-top', windowHeight);
// }
