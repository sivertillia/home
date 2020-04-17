$(document).ready(function() {
    var player = new Playerjs({
        "id":"player",
        "file":"[480]https://sivertillya.github.io/site/anime/site/pet-na-kanojo/video/duel.mp4,[720]https://hd.roomfish.ru/720/2147395789.mp4?md5=veVt-GHJMimfje3oY3E9AA&time=1587066849",
        "qualities":"480p,720p",
        "poster":"https://sivertillya.github.io/site/anime/site/pet-na-kanojo/video/1.jpg"
    });

    function PlayerjsEvents(event,id,info){
        if(event=="play"){
            alert(event);
        }
        if(event == "time"){
            console.log(event,id,info);
        }
        if(event== "seek") {

        }
    }
});