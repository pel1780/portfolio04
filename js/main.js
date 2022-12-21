$(function () {
    $('.header .right a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        // gnb보이게 하는
        $('.header .right a').toggleClass('on');
        // menu icon 바꾸기
    });

    // var wh = $(window).height();
    // console.log(wh)
    // $(window).on('scroll', function () {
    //     var sct = $(window).scrollTop();
    //     var navH = $('.header').height();
    //     console.log(sct)
    //     if (sct > (wh - navH)) {
    //         $('.header').css({ top: -(sct - (wh - navH)) })
    //     } else {
    //         $('.header').css({ top: 0 })
    //     }
    // }) 스크롤이 일정 부분이 되었을때 요소가 멈추는것(sticky처럼 작동함)

    $(window).on('wheel', function (event) {
        var wdY = event.originalEvent.deltaY;
        if (wdY > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $(window).on('scroll', function () {

        var sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('bg')
        } else {
            $('.header').removeClass('bg')
        }
    })

})