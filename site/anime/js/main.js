$(document).ready(function() {
    var listBlock = document.querySelector('.list-anime-search-box');
    var listButton = document.querySelector('.second_title_2');

    listButton.onclick = function() {
        listBlock.classList.toggle('none');
        listBlock.classList.toggle('block');
    };






    function check_for_no_anime(){
        var show_some=false;
    }
    $(".all_anime_global").each(function(indx,element){
        if($(element).css("display")!="none"){show_some=true;return false;}
    });
    if($("#dle-content").outerHeight(){
        $(".anime_choose_wall").outerHeight()+$(".mailBlock_h").outerHeight();
        $("#dle-content").css({"min-height":($(".anime_choose_wall").outerHeight()+$(".mailBlock_h").outerHeight())+"px"});
    }
    if(show_some) {
        if ($(".anime_choose_no_anime_top").css("display") != "none") {
            $(".anime_choose_no_anime_top").fadeOut(fade_anime_time)
        };
    };
});