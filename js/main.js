$(document).ready(function () {
  $(".education__acc-link").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("education__acc-link--active")) {
      $(this).removeClass("education__acc-link--active");
      $(this).children(".education__acc-text").slideUp();
    } else {
      $(".education__acc-link").removeClass("education__acc-link--active");
      $(".education__acc-text").slideUp();
      $(this).addClass("education__acc-link--active");
      $(this).children(".education__acc-text").slideDown();
    }
  });
});