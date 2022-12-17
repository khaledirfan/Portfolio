$(document).ready(function () {
  if (this.scrollY > 20) {
    $(".navbar").addClass("sticky");
  } else {
    $(".navbar").removeClass("sticky");
  }
  if (this.scrollY > 500) {
    $(".scroll-up-btn").addClass("show");
  } else {
    $(".scroll-up-btn").removeClass("show");
  }
});

$(".scroll-up-btn").click(function () {
  $("html").animate({ screenTop: 0 });
});
