$(function () {
  $(".headernav ").on("mouseenter", function () {
    $("#header").addClass("on");
  });
  $(".headernav ").mouseleave(function () {
    $("#header").removeClass("on");
  });
});
