(function ($) {
    "use strict";

    const bestSlider = $(".ba-slider-1__go");

    bestSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        // slide: '.ba-index-slider__img',
        prevArrow: ".ba-slider-prev",
        nextArrow: ".ba-slider-next",
        autoPlay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

})(jQuery);

(function ($) {
    "use strict";

    const bestSlider = $(".ba-slider-2");

    bestSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        // slide: '.ba-index-slider__img',
        prevArrow: ".ba-best-slider-prev",
        nextArrow: ".ba-best-slider-next",
        autoPlay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

})(jQuery);

