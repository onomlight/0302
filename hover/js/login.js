$(document).ready(function () {
  $(".sign-up").change(function () {
    if ($(".sign-up").is(":checked")) {
      $(".login-html").addClass("upclass");
    }
  });
  $(".sign-in").change(function () {
    if ($(".sign-in").is(":checked")) {
      $(".login-html").removeClass("upclass");
    }
  });
});
