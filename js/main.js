$(function () {
    $('.header .right a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header .right a').toggleClass('on');
    });

    var wh = $(window).height();
    console.log(wh)
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        var navH = $('.header').height();
        console.log(sct)
        if (sct > (wh - navH)) {
            $('.header').css({ top: -(sct - (wh - navH)) })
        } else {
            $('.header').css({ top: 0 })
        }
    })

})