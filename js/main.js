$(function () {
    $('.header .right a').on('click', function () {
        $('.header .gnb').toggleClass('on');
        $('.header .right a').toggleClass('on');
    });


    var lastScrollTop = 0, delta = 5;

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();

        // if (Math.abs(lastScrollTop - st) <= delta) return;

        if (sct > lastScrollTop && (lastScrollTop > 0)) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        };
        lastScrollTop = sct;

        if (sct > 0) {
            $('.header').addClass('bg')
        } else {
            $('.header').removeClass('bg')
        };
    });

    // gnb에 hover될때 배경이미지 각각 다르게 주기(html gnb>li에 data-img로 변경)
    $('.header .gnb ul li').mouseenter(function () {
        var change_image = $(this).attr('data-img')
        $('.header .gnb').css({
            'background-image': 'url(' + change_image + ')'
        })
    })
    $('.header .gnb ul li').mouseleave(function () {
        $('.header .gnb').css({
            'background-image': ''
        })
    })

    // mainVisual slide

    $('.main_slide').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
    });


    // slide
    $('.bt_slide').slick({
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            }]
    });

    $('.banyantreeSlide .dots li').on('click', function () {
        var slide_list_number = $(this).index();
        $('.bt_slide').slick('slickGoTo', slide_list_number);
    });

    $('.banyantreeSlide .btn .prev i').on('click', function () {
        $('.bt_slide').slick('slickPrev');
    })

    $('.banyantreeSlide .btn .next i').on('click', function () {
        $('.bt_slide').slick('slickNext');
    })

    $('.bt_slide').on('afterChange', function (e, s, c) {
        $('.banyantreeSlide .dots li').eq(c).addClass('line').siblings().removeClass('line');
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
