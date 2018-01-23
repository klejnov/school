$('#mobile-menu').on("click", function(){
    $('.header-main-menu').slideToggle();
    $('.fa-bars').toggleClass('rotate');
});

$(window).resize(function(){
    if ($(window).width() <= 768){
        $('.header-main-menu').hide();
    }else {
        $('.header-main-menu').show();
    }
});

