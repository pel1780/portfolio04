$(function(){
    $('.header .right a').on('click',function(){
        $('.header .gnb').toggleClass('on');
        $('.header .right a').toggleClass('on');
    });

    var lastScrollTop = 0, delta = 5; 

    $(window).on('scroll',function(event){
        var sct = $(window).scrollTop();

        // if (Math.abs(lastScrollTop - st) <= delta) return;

        if(sct >lastScrollTop && (lastScrollTop > 0)){
            $('.header').addClass('on')
        } else{
            $('.header').removeClass('on')
        };
        lastScrollTop = sct;

        
    });

    $(window).on('scroll',function(){
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('bg')
        } else {
            $('.header').removeClass('bg')
        } ;
    })

    


})