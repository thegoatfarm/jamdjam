$(document).ready(function() {

    var $chevUp = $("#chevUp");
    var $about = $("#listen");

    $(".toTop").click(function(e) {
        // smoothly scroll to top
        $("body, html").animate({
            "scrollTop": "0px"
        }, 1200);
        e.preventDefault();
        return false;
    });

    $(".nav a").click(function(e) {
        // smoothly scroll to top
        var pos = $($(this).attr("href")).offset().top - 75;
        if (pos < 0) pos = 0;
        $("body, html").animate({
            "scrollTop": pos + "px"
        }, 1200);
        e.preventDefault();
        return false;
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= $about.offset().top - 10) {
            $chevUp.addClass("active");
        } else {
            $chevUp.removeClass("active");
        }
    });
});