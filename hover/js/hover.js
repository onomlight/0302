// 행오버기능 추가
$(document).ready(function () {
  $(function () {
    $(".headernav ").on("mouseenter", function () {
      $("#header").addClass("on");
    });
    $(".headernav ").mouseleave(function () {
      $("#header").removeClass("on");
    });
  });
});

// 셋타임아웃 추가

function disnone() {
  $(".page_loader").addClass("none");
}
setTimeout(disnone, 10000);
