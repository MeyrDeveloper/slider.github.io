
//import module from './module'

$(document).ready(function() {
    $('#carousel').flexslider({
		animation: "slide",
		controlNav: true,
		animationLoop: false,
		slideshow: false,
		itemWidth: 150,
		itemMargin: 5,
		asNavFor: '#slider'
	  });
	 
	  $('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
        sync: "#carousel",
        maxItems: 1,
        minItems: 1
	  });
   
});
