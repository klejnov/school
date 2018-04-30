;


$(function () {

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 10,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000
        },

        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        },
        autoHeight: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is <= 640px
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    $('a').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
        }
    });


    $.fn.equalHeights = function () {
        var maxHeight = 0, $this = $(this);
        $this.each(function () {
            $this.css('height', 'auto'); // Дополнил. Нужно при resize окна "сбросить" высоту блока до дефолтной при этом размере окна.
            var height = $(this).innerHeight();

            if (height > maxHeight) {
                maxHeight = height;
            }
        });
        console.log(maxHeight);
        return $this.css('height', maxHeight);
    };

    $('.item').equalHeights();

    $(window).on('resize', (function () {

        $('.item').equalHeights();

    }));

});


// вывод кода в textarea (подключен jQuery v3.3.1 для работы с ajax)
var code_js;
$.ajax({
    url: "js/script.js",
    dataType: "text",
    async: true,
    success: function (msg) {
        code_js = msg;
        document.getElementById("code").innerHTML = code_js;
    }
});
