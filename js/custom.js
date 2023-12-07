$(document).ready(function(){
   $('.kl-list-marque').owlCarousel({
            items : 6,
            autoPlay : 3000,
            itemsDesktop : [1000,3],
            itemsDesktopSmall : [900,3],
            itemsTablet : [600,2],
            itemsMobile : [479,1]
        }); 
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});
