// JQuery Install
$(document).ready(function() {
    // Banner Slider
    $('.banner_wrapper').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4099,
    });
    // Our Service - Swiper Slider
    $('.our_service_card_slide_tray').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-left service_card_slide_btn service_card_slide_prev_btn"></i>',
        nextArrow: '<i class="fas fa-long-arrow-right service_card_slide_btn service_card_slide_next_btn"></i>',
        autoplay: true,
        autoplaySpeed: 4099,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

});