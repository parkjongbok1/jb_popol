$(document).ready(function () {
  $(".creation_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".creation_p"), //이전 화살표
    nextArrow: $(".creation_n"), //다음 화살표
    autoplay: false,
    autoplaySpeed: 3200,
    speed: 800,
    slidesToShow: 3, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
  });

  $(".career_slider").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: $(".career_p"), //이전 화살표
    nextArrow: $(".career_n"), //다음 화살표
    autoplay: false,
    autoplaySpeed: 3200,
    speed: 800,
    slidesToShow: 3, //보여질 슬라이드 갯수
    slidesToScroll: 1, //넘겨질 슬라이드 갯수
  });
});
