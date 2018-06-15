$(function () {
    $(".contacts__close-btn").click(function(){
        $(".contacts__block").toggleClass("close")
    })
    $('.client__name').click(function(){
        $(this).siblings().slideToggle("hidden")
        
    })
    $('.del-btn').click(function(){
        $(this).parent(".client").remove()
    })
})
