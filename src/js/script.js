
$(window).scroll(function() {
    if ($(this).scrollTop() > 1200) {
        $('.page-up').fadeIn();
    } else {
        $('.page-up').fadeOut();
    }
});

/* $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
}); */