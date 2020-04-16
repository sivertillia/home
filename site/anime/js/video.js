$(document).ready(function() {
    var player = new Playerjs({
        "id":"player",
        "file":"[480]https://std.roomfish.ru/2147395789.mp4?md5=GeUkcpxMBl-QMxA16yUafg&time=1587066849,[720]https://hd.roomfish.ru/720/2147395789.mp4?md5=veVt-GHJMimfje3oY3E9AA&time=1587066849",
        "qualities":"480p,720p"
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