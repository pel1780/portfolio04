$(function () {
    $('.header .right a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header .right a').toggleClass('on');
    });

    var lastScrollTop = 0, delta = 5;

    $(window).on('scroll', function (event) {
        var sct = $(window).scrollTop();

        // if (Math.abs(lastScrollTop - st) <= delta) return;

        if (sct > lastScrollTop && (lastScrollTop > 0)) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        };
        lastScrollTop = sct;


    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('bg')
        } else {
            $('.header').removeClass('bg')
        };
    });

    $('.bt_slide').slick({
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
    });

    $('.banyantreeSlide .dots li').on('click', function () {
        var slide_list_number = $(this).index();
        $('.bt_slide').slick('slickGoTo', slide_list_number);
    })




})
// var wh = $(window).height();
//     // console.log(wh)
//     // $(window).on('scroll', function () {
//     //     var sct = $(window).scrollTop();
//     //     var navH = $('.header').height();
//     //     console.log(sct)
//     //     if (sct > (wh - navH)) {
//     //         $('.header').css({ top: -(sct - (wh - navH)) })
//     //     } else {
//     //         $('.header').css({ top: 0 })
//     //     }
//     // }) 스크롤이 일정 부분이 되었을때 요소가 멈추는것(sticky처럼 작동함)
