$(function () {
    $('.contacts__callback-btn').click(function() {
        $(".callback-popup").removeClass('callback-popup_close');
        $('.callback-popup').css({backgroundColor: 'rgba(31, 62, 83, 0.97)'},500)
    })
    $('.close-btn').click(function(){
        $(".callback-popup").addClass('callback-popup_close');
    })
})