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

jQuery(document).ready(function($) {

    $(document).on('data-char-changed', function() {
        var index = $('.characters_weapons_right .img_box');
        setTimeout(function() {
            index.delay(260).attr('data-aos', 'fade-up');
        }, 260);
        setTimeout(function() {
            index.delay(500).attr('data-aos', 'fade-up').children('img').attr('src', index.data('src'));
            index.addClass('aos-init aos-animate');
        }, 450);
    });
    $('.item_charactor').on('click', function() {
        var index = $('.characters_weapons_right .img_box');
        index.attr('data-aos', 'fade-down');
        index.removeClass('aos-init aos-animate');
        index.data('src', $(this).data('img'));
        $(document).trigger('data-char-changed');
    });
});