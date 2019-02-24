$(document).ready(function() {

	$('.header-carousel').owlCarousel({
	      items: 1,
	      autoplay:true,
	      smartSpeed: 700,
	      autoplayTimeout:5000,
	      loop:true,
	      touchDrag: true,
        nav: true,
        navText: ["<i class='fas fa-angle-left'/>", "<i class='fas fa-angle-right'/>"]

	 });

		$('.brands-carousel').owlCarousel({
	      items: 2,
	      autoplay:true,
	      smartSpeed: 700,
	      autoplayTimeout:5000,
	      loop:true,
	      touchDrag: true,
          margin: 0,
          nav: true,
          navText: ["<i class='fas fa-angle-left'/>", "<i class='fas fa-angle-right'/>"],
	      responsive:{
            0:{
                items:2
            },
             480:{
                items:3
            },

            768:{
                items:4
            },
            1200:{
                items:6
            }
        }

	 });
    $('.review-carousel').owlCarousel({
        items: 1,
        autoplay:true,
        smartSpeed: 700,
        autoplayTimeout:5000,
        loop:true,
        touchDrag: true,
        margin: 0,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-angle-left'/>", "<i class='fas fa-angle-right'/>"],
        responsive:{
            768:{
                items:2
              }
        }

   });
        $('.header-mobile-slider').owlCarousel({
        items: 1,
        autoplay:true,
        smartSpeed: 700,
        autoplayTimeout:5000,
        loop:true,
        touchDrag: true,
        margin: 0
   });


	$("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
        	if ($(this).scrollTop() > 200) {
                    $('#back-top').fadeIn();
            } else {
                    $('#back-top').fadeOut();
            }
   		 });

	});


     wow = new WOW( {
       boxClass:     'wow',      // default
      animateClass: 'animated', // default
      mobile:       true,       // default
      offset:       110,          // через сколько пикселей сработает
      live:         true        // для мобильных оставить или убрать анимацию
      }
    );
    wow.init();
     new WOW().init();
     // end animated

     //-фиксация меню
    $(window).scroll(function(event) {
      if($(window).scrollTop() > 10){
        $(".nav-menu").addClass('nav-menu--fixed');
         // $(".nav-menu-wrapper").show(300);

      }
      else{
       $(".nav-menu").removeClass('nav-menu--fixed');
       $(".nav-menu-wrapper").hide(300) ;
      }
    });

})