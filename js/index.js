$(document).ready(function () {
    $(".show_all a").on("click", function () {
        $(this).addClass("hide").parent().prev().find("li.hide").removeClass("hide");
        return false;
    });
