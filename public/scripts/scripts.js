/*========
 ==== MAIN SCRIPTS
 ========*/

// *==* Document Ready *==*	
$(document).ready(function(){
	
	// *==* Modal for Contact popup *==*	
	$('.contact-form').on('click', function(){
	   $('.ui.modal').modal('show');  
	});
	
	// *==* Sidebar Nav *==*
	$('.hamburger').on('click', function(){
		$('.ui.sidebar').sidebar('toggle');
	});
	
	// *==* Slick Carousel *==*	
  $('.slick').slick({

	  dots: false,
	  infinite: true,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 5000,          
	  speed: 500,
	  arrows: true,
	  nextArrow: '<div class="arrow right transition"><i class="chevron right icon"></i></div>',
	  prevArrow: '<div class="arrow left transition"><i class="chevron left icon"></i></div>',
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '40px',
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  autoplay: true
		  }
		},
		{
		  breakpoint: 481,
		  settings: {
			arrows: true,
			centerMode: false,
			centerPadding: '0',
			slidesToShow: 1,
	  		slidesToScroll: 1,		
		  }
		},
		{
		  breakpoint: 321,
		  settings: {
			arrows: true,
			centerMode: false,
			centerPadding: '0',
			slidesToShow: 2,
	  		slidesToScroll: 2,		
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

	$('.ui.sticky')
	  .sticky({
		context: '#header'
	  });	

	// *==* Wrapper Height *==*	
	//var  headerHeight = $('.wrapper').outerHeight(true)
	var totalHeight = $(document).outerHeight(true);
	
	$('.wrapper-right').height(totalHeight);

	$(window).resize(function(){
		$('.wrapper-right').height(totalHeight);
	});

	$('.ui.inverted.modal').modal('show');


});	
