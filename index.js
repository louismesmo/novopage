$('#').on('click', function(e){
    e.preventDefault();
    const elem = this; // save it so we can use it in the animate

    $('html, body').animate({
        scrollTop: $( $(elem).attr('href') ).offset().top
     }, 2000);
});