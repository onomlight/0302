$(function () {

    /* ---- ---- ---- ----HEADER---- ---- ---- ---- */
   

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
    


});


