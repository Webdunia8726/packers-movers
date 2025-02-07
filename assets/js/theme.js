(function($) {
    'use strict';
    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });
    // Loder  //
    $(function() {
        $('body').addClass('loaded');
    });

    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });

    // Testimonial Active
    $('.testimonial_list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: true,
        nav: false,
        center: true,
        margin: 10,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    })

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })
})(jQuery);
// =======< accordion js >========
$(".accordion > li:eq(0) a").addClass("active").next().slideDown();
$('.accordion a').on('click', function(j) {
    var dropDown = $(this).closest("li").find("p");

    $(this).closest(".accordion").find("p").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();

    j.preventDefault();
});