$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    });



});

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $("#topBtn").click(function () {
        $('html ,body').animate({ scrollTop: 0 }, 800);
    });

});


$(window).on("load",function(){
    $(".loader-container").fadeOut(1000);
})

