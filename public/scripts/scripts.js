/*========
 ==== MAIN SCRIPTS
 ========*/

// *==* Document Ready *==*	
$(document).ready(function(){
	
	// *==* Slick Carousel *==*	
  $('.slick').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  dots: false,
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  autoplay: true,
	  autoplaySpeed: 5000,          
	  speed: 500,
	  nextArrow: '<div class="arrow right"><i class="chevron right icon"></i></div>',
	  prevArrow: '<div class="arrow left"><i class="chevron left icon"></i></div>',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '40px',
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  autoplay: true,
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
	
	// *==* FancyBox Setup for Slick Carousel *==*	
	$("a.outliers-photos").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	// *==* Modal for Contact popup *==*	
	$('.contact-form').on('click', function(){
	   $('.ui.modal').modal('show');  
	});
	// *==* Sidebar Nav *==*
	$('.hamburger').on('click', function(){
		$('.ui.sidebar').sidebar('toggle');
	});
});	
