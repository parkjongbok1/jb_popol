$(document).ready(function () {
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 80) {
  //     $(".header").addClass("active");
  //   } else {
  //     $(".header").removeClass("active");
  //   }
  // });

  $("#intro")
    .delay(3500)
    .fadeOut(1000, function () {
      $("body").removeClass("before-load");
    });

  let lastScrollTop;
  let delta = 100;
  let didScroll;

  setInterval(function () {
    if (didScroll) {
      scrollHeaderEvent();
      didScroll = false;
    }
  }, 1000);
});
