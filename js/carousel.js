$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 3,
      margin: 10,
      loop: true,
      nav: false,
      dots: false,
      responsive:{
        0:{
          items:1
        },
        1450:{
          items:3
        }
      }
    });
    $(".arrowRight").click(function(){
        owl.trigger("next.owl.carousel");
      });
       
      $(".arrowLeft").click(function(){
        owl.trigger("prev.owl.carousel");
      });
  });