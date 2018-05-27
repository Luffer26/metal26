
$(function () {
    var slideNow = 1;
    var slideCount = $('.slider__list').children().length;
    var translateWidth = 0;
    var slideInterval = 8000;
    var navBtnId = 0;
    var slideDot = 0
    var dots = $(".slider-dots__item")
    function nextSlide() {
        if (slideNow == slideCount) {
            $(dots).removeClass("dot_active")
            $(dots[0]).addClass("dot_active")
            $('.slider__list').css('transform', 'translate(0, 0)');
            slideNow = 1;
            slideDot = 0
        } else {
            
            $(dots[++slideDot]).addClass("dot_active")
            $(dots[slideDot]).siblings(".dot_active").removeClass("dot_active")

            translateWidth = -$('.slider').width() * (slideNow);
            $('.slider__list').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }

    $('.slider-dots__item').click(function () {
        $(this).addClass("dot_active")
        $(this).siblings(".dot_active").removeClass("dot_active")
        navBtnId = $(this).index();
        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.slider').width() * (navBtnId);
            $('.slider__list').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
    setInterval(nextSlide, slideInterval);
});