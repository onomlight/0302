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

function lchk() {
  if (!mform.id.value) {
    alert("아이디를 입력하세요");
    mform.id.focus();
    return;
  }
  if (!mform.pw.value) {
    alert("비밀번호를 입력하세요");
    mform.pw.focus();
    return;
  }
  mform.submit();
}
function mchk() {
  if (!sform.name.value) {
    alert("이름을 입력하세요");
    sform.name.focus();
    return;
  }
  if (!sform.id.value) {
    alert("아이디를 입력하세요");
    sform.id.focus();
    return;
  }
  if (!sform.pw.value) {
    alert("비밀번호를 입력하세요");
    sform.pw.focus();
    return;
  }
  if (!sform.pw1.value) {
    alert("비밀번호확인을 입력하세요");
    sform.pw1.focus();
    return;
  }
  if (sform.pw.value != sform.pw1.value) {
    alert("비밀번호를 잘못입력했습니다. 다시 입력해 주세요.");
    sform.pw.value = "";
    sform.pw1.value = "";
    return;
  }
  if (!sform.hu.value) {
    alert("휴대폰번호를 입력하세요");
    sform.hu.focus();
    return;
  }
  if (!sform.birth.value) {
    alert("생년월일을 입력하세요");
    sform.birth.focus();
    return;
  }
  sform.submit();
}
