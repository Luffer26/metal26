$(document).ready(function() {
    $('.menu-btn').click(function() {
        $(this).toggleClass('open');
        $('.m-menu').toggleClass('m-menu_close');
        $('.wrapper').toggleClass('popup');
    })
    $(window).resize(function(){
        if($(window).width() >= 1040){
            $('.m-menu').addClass('m-menu_close');
            $(".menu-btn").removeClass('open');
        }
    })
})