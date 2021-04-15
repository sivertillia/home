$(document).ready(function() {
    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1000);
        }
    }

    $(".scroll_link_js").on("click", function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        scrollTo( $(href) );
    });
});