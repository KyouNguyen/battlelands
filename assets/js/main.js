

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
        if($(window).width() < 1440) {
            $('.site-content .container').each(function() {
                var container_height = $(this).outerHeight(),
                    parent_height = $(this).parent().outerHeight(),
                    summary_height = 0;
                if(container_height >= parent_height) {
                    var minus_height = container_height - parent_height;
                    if( minus_height >= 0 ) {
                        summary_height = container_height + minus_height + (150 - minus_height);
                        $(this).parent().css('min-height', summary_height);
                    }
                }
            });
        }
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

jQuery(document).ready(function($){ 
    var swiper = new Swiper(".section-gameplay .mySwiper", {
        spaceBetween: 28,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });

    var swiper2 = new Swiper(".section-gameplay .mySwiper2", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop:true,
        navigation: {
        nextEl: ".gameplay-button-next",
        prevEl: ".gameplay-button-prev",
        },
        thumbs: {
            swiper: swiper,
            multipleActiveThumbs : false,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    var swiper3 = new Swiper(".own_lands_box_left .mySwiper", {
        spaceBetween: 30,
        slidesPerView: 3,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centerInsufficientSlides: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        autoplay: {
            delay: 5000000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".own_lands-button-next",
            prevEl: ".own_lands-button-prev",
        },
    });

    AOS.init();      

});

jQuery(document).ready(function($){ 
    $('.playPause-btn').click(function(){
        $('.icn-pause-play').toggle();
        $('.image-video').toggle();
    });
});  

jQuery(document).ready(function($) {

    $(document).on('data-char-changed', function() {
        var index = $('.characters_weapons_right .img_box'),
            label = $('.characters_weapons_right .content_box .subtitle'),
            title = $('.characters_weapons_right .content_box .title'),
            content = $('.characters_weapons_right .content_box .content'),
            money = $('.characters_weapons_right .content_box .money');
        setTimeout(function() {
            index.delay(260).attr('data-aos', 'fade-up');
        }, 260);
        setTimeout(function() {
            index.delay(500).attr('data-aos', 'fade-up').children('img').attr('src', index.data('src'));
            label.delay(500).text(index.data('label'));
            title.delay(500).text(index.data('title'));
            content.delay(500).text(index.data('content'));
            money.delay(500).text(index.data('money'));
            index.addClass('aos-init aos-animate');
            label.addClass('aos-init aos-animate');
            title.addClass('aos-init aos-animate');
            content.addClass('aos-init aos-animate');
            money.addClass('aos-init aos-animate');
        }, 450);
    });
    $('.item_charactor').on('click', function() {
        if( !$(this).hasClass('selected') ) {
        var index = $('.characters_weapons_right .img_box'),
        content_box = $('.characters_weapons_right .content_box');
        index.attr('data-aos', 'fade-down');
        index.removeClass('aos-init aos-animate');
        content_box.children().removeClass('aos-init aos-animate');
        index.data({
            'src' : $(this).data('index'),
            'label' : $(this).data('label'),
            'title' : $(this).data('title'),
            'content' : $(this).data('content'),
            'money' : $(this).data('money'),
        });
        if( !$(this).hasClass('selected') ) {
            $(this).children('img').attr('src', $(this).data('hover'));
            $(this).siblings().each(function() {
                $(this).children('img').attr('src', $(this).data('img'));
            });
        }
        $(this).addClass('selected').siblings().removeClass('selected');
        $(document).trigger('data-char-changed');

        }
    });
});