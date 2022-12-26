//========================================
//      FOR SUGGEST CATEGORY SLIDER
//========================================
$(".suggest-slider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: true,
  rtl: true,
  speed: 1000,
  prevArrow: '<i class="icofont-arrow-right dandik"></i>',
  nextArrow: '<i class="icofont-arrow-left bamdik"></i>',
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      },
    },
  ],
});
