$(document).ready(function(){

	$('.img').slick({
	    dots: false,
		infinite: false,
		arrows:false,
		slidesToShow: 8,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 5,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 5,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
		        infinite: true,
		      }
		    }
		]
	  });


});