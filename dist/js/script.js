
$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('.page-up').fadeIn();
    } else {
        $('.page-up').fadeOut();
    }
});