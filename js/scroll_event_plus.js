$(document).ready(function () {
  // 각 섹션의 변수
  const sec1_offset = $(".sec01").offset().top;
  const sec2_offset = $(".portfolio").offset().top;
  // const sec3_offset = $(".sec03").offset().top;
  // const sec4_offset = $(".sec04").offset().top;
  // const sec5_offset = $(".sec05").offset().top;

  let contents_scrillTop = 0;

  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    contents_scrillTop = scrollTop - sec2_offset;

    // sec2
    if (scrollTop > sec2_offset / 2) {
      $(".cloud02").css({
        transform: "translateX(" + -contents_scrillTop * 0.5 + "px)",
      });
    }
    if (scrollTop > sec2_offset / 3) {
      $(".s_cloud01").css({
        transform: "translateX(" + contents_scrillTop * 1.3 + "px)",
      });
      $(".s_cloud02").css({
        transform: "translateX(" + -contents_scrillTop * 0.4 + "px)",
      });
      $(".s_cloud03").css({
        transform: "translateX(" + contents_scrillTop * 0.3 + "px)",
      });
      $(".s_cloud04").css({
        transform: "translateX(" + -contents_scrillTop * 1.1 + "px)",
      });
      $(".s_cloud05").css({
        transform: "translateX(" + contents_scrillTop * 0.4 + "px)",
      });
      $(".s_cloud06").css({
        transform: "translateX(" + -contents_scrillTop * 0.3 + "px)",
      });
    }
    // sec2 end

    // // sec3
    // if (scrollTop >= sec3_offset / 1.65) {
    //   $("").css({});
    // } else {
    //   $("").css({});
    // }
    // // sec3 end

    // // sec4
    // if (scrollTop >= sec4_offset / 1.65) {
    //   $("").css({});
    // } else {
    //   $("").css({});
    // }
    // // sec4 end

    // // sec5
    // if (scrollTop >= sec5_offset / 1.65) {
    //   $("").css({});
    // } else {
    //   $("").css({});
    // }
    // // sec5 end

    // // sec6
    // if (scrollTop >= sec6_offset / 1.65) {
    //   $("").css({});
    // } else {
    //   $("").css({});
    // }
    // sec6 end
  });
});

// 스크롤 탑 이벤트 사용 예시

// if (scrollTop >= 변수명) {

// 이벤트 실행
// $(".sec2 .box").css({
// bottom: "20%",
// opacity: "1",
// });
// } else {

// 이벤트 종료

// $(".sec2 .box").css({
//   bottom: "",
//   opacity: "",
// });

// }
