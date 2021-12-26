jQuery(document).ready(function($) {
    if ($(window).width() < 1025) {

        var menuButton = document.querySelector('#nav-mobile-button-open'),
            menuButtonClose = document.querySelector('#nav-mobile-button-close'),
            menuMobileOut = function(){
                $('#nav-mobile-button-close').addClass('closed');
                $('#nav-mobile-button-open').removeClass('expanded');
                $('.site-content-wrap > .menu').removeClass('expanded');
            },
            menuMobileIn = function(){
                $('#nav-mobile-button-open').addClass('expanded');
                $('#nav-mobile-button-close').removeClass('closed');
                $('.site-content-wrap > .menu').addClass('expanded');
            };

        $('#nav-mobile-button-open').on('click', menuMobileIn);
        $('#nav-mobile-button-close').on('click', menuMobileOut);
        $('.site-content-wrap > .menu .nav-items > li > a').on('click', menuMobileOut);
    }
    else {
    }
    //tot
    var top = $(window).scrollTop();
    if (top > 0) {
        $('header.fixed').addClass('fixed_header');
    }
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header.fixed').addClass('fixed_header');
        }else{
            $('header.fixed.fixed_header').removeClass('fixed_header');
        }
    });

    
});