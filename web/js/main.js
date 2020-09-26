require([
  "jquery",
  "owlcarousel"
],
function($, owlCarousel) {
  $(document).ready(function($){
    var owl = $('.owl-carousel').owlCarousel({
      autoplay: true,
      nav: true,
      margin: 30,
      loop: true,
      items: 1
      // // responsiveClass:true,
      // responsive: {
      //   0: {
      //   },
      //   380: {
      //     items: 2
      //   },
      //   800: {
      //     items: 3
      //   }
      // }
    });
  });
  return;
});
