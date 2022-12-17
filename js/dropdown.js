$(function () {
    $(".show_all a").on("click", function () {
        $(this).addClass("hide").parent().parent().parent().find("li.hide").removeClass("hide");
        return false;
    });
  });