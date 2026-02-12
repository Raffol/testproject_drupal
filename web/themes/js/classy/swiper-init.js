(function (Drupal) {
  Drupal.behaviors.mainSlider = {
    attach: function (context) {
      new Swiper('.main-slider', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  };
})(Drupal);
