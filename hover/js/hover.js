$(function () {

    /* ---- ---- ---- ----HEADER---- ---- ---- ---- */
    $(".header__all--open").on("click", function () {
        $(".header__allBox").fadeIn();
    });
    $(".allBoxBg, .header__all--close").on("click", function () {
        $(".header__allBox").fadeOut();
    });

    $(".header__nav nav .depth1 > a").on("mouseenter focus", function () {
        $(".header__nav nav .depth2_wrap").hide();
        $(this).next(".depth2_wrap").show();
        $(".header__nav nav .depth1").removeClass("on");
        $(this).parent('li').addClass('on');
        $("#header").addClass("on");
    });
    $(".header__nav nav").mouseleave(function () {
        $(".header__nav nav .depth2_wrap").hide();
        $("#header").removeClass("on");
        $(".header__nav nav .depth1").removeClass("on");
    });
    /*전체메뉴*/
    $(".header__allBox .depth1 > a").on("click", function () {
        if (window.mode === 'mobile') {
        $(this).parent().siblings('li').removeClass("on");
        $(this).parent().siblings('li').find('.depth2_wrap').slideUp();
        $(this).parent('li').toggleClass('on');
        $(this).parent().find('.depth2_wrap').slideToggle();
        }
    });
    function allMb() {
        if ($(window).width() < 1020) {
            $('.header__allBox .depth2_wrap').hide();
        }
    }
    function allPc() {
        if ($(window).width() >= 1020) {
            $('.header__allBox .depth2_wrap').show();
        }
    }
    allMb();
    allPc();
    window.addEventListener("resize", allMb, false);
    window.addEventListener("resize", allPc, false);

    
    $(".header__allBox .depth1 a").on("mouseenter focus", function () {
        $(".header__allBox .depth1").removeClass("active");
        $(this).parents("li").addClass('active');
    });

    $(".header__allBox .allBox > ul").mouseleave(function () {
        $(".header__allBox .depth1").removeClass("active");
    });

  


});


