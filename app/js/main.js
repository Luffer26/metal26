$(function () {
    $(".contacts__close-btn").click(function(){
        $(".contacts__block").toggleClass("close")
    })
    $('.application').click(function(){
        $('.admin__data',this).slideToggle("hidden")
    })
})