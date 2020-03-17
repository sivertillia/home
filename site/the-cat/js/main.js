$(document).ready( function(){
    var
        id_song, Song, i, mute = false, volume = 1,
        songs = [
            muz_one = [0, 'Oxxxymiron(Город под подошвой)', './audio/track_1.mp3', '246.543673' ],
            muz_two = [1, 'Oxxxymiron(Город под подошвой)', './audio/track_1.mp3','246.543673' ],
            muz_three = [2, 'Музыка_1_сервер', 'http://kdg.htmlweb.ru/music/mark_bernes_-_zhuravli.mp3', '253.421875' ],
            muz_four = [3,  'Музыка_2_сервер', 'http://kdg.htmlweb.ru/music/mark_bernes_-_zhuravli.mp3', '253.421875' ]
        ];
  /*Song = new Audio(songs[0][2]); //как узнать продолжительность песни [0] ето песня по счету
    Song.addEventListener('loadedmetadata', function(){
        console.log(this.duration);
    });*/







    for (i=0; i < songs.length; i++) {
        var zeros = "";
        var time;
        time = parseInt(songs[i][3]%60);
        if(time < 10) zeros = 0;
        $('.wpr').append('<div class="song click" id="'+songs[i][0]+'"><div class="play-pause_song"></div><div class="nameSong_song">'+songs[i][1]+'</div><div class="downloadSong_song"><a href="'+songs[i][2]+'" download="'+songs[i][1]+'" class="fa fa-download"></a></div><div class="duration_song">'+parseInt(songs[i][3]/60)+ ':'+zeros+time+'</div></div>');
    }


    function playNewSong(id) {
        var curtime, cur = -100;
        $('.player .nameSong').text(songs[id][1]);
        $('.play-pause').attr('id', id);
        id_song = id;
        Song = new Audio(songs[id][2]);
        $('.play-pause').css({'background-position':'3px -36px'});
        $('.song#'+id+' .play-pause_song').css({'background-position':'0px -25px'});
        Song.play();
        Song.volume = volume;
        Song.addEventListener('timeupdate', function () {

            var zerosT = "";
            var timeT;
            timeT = parseInt(curtime%60);
            if (timeT < 10) zerosT = 0;

            var zerosG = "";
            var timeG;
            var curtimer = ((songs[id_song][3]));
            timeG = parseInt(curtimer%60);
            if (timeG < 10) zerosG = 0;
            $('.timeG').text(parseInt(curtimer/60)+':'+zerosG+timeG);

            curtime = Song.currentTime;
            cur = -((songs[id_song][3] - curtime)*100)/songs[id_song][3];
            $('.time').text(parseInt(curtime/60)+':'+zerosT+timeT);
            $('.progress').css({'left':cur+'%'});
        });
        Song.addEventListener('progress', function () {
            var
            load = Song.buffered.end(0);
            load = -((songs[id_song][3] - load)*100)/songs[id_song][3];
            $('.load').css({'left':load+'%'});
        });
    }

    function playPauseSong(id) {
        if (Song) {
            if (id == id_song) {
                if (Song.paused) {
                    Song.play();
                    Song.volume = volume;
                    $('.play-pause').css({'background-position':'3px -36px'});
                    $('.song#'+id+' .play-pause_song').css({'background-position':'0px -25px'});
                }
                else {
                    Song.pause();
                    $('.play-pause').css({'background-position':'3px 6px'});
                    $('.song#'+id+' .play-pause_song').css({'background-position':'0px 0px'});
                }
            }
            else {
                Song.pause();
                $('.play-pause_song').css({'background-position':'0px 0px'});
                $('.song#'+id+' .play-pause_song').css({'background-position':'0px -25px'});
                playNewSong(id);
            }
        }
        else {
            playNewSong(id);
        }
    }
    $('.song, .play-pause').on('click', function () {
        var id = $(this).attr('id');
        $('.play-pause_song').css({'background-position':'0px 0px'});
        playPauseSong(id);
        id++;
        $('.sledbtn#sled').attr('data-id', id);
        id--;id--;
        $('.sledbtn#pred').attr('data-id', id);
    });


    $('.sledbtn').on('click', function () {
        var id = $(this).attr('data-id');
        if (id != -1) {
            $('.play-pause_song').css({'background-position':'0px 0px'});
            playPauseSong(id);
            id++;
            $('.sledbtn#sled').attr('data-id', id);
            id--;id--;
            $('.sledbtn#pred').attr('data-id', id);
        }
    });
    $('.mute').on('click', function () {
        if (Song) {
            if (mute == false) {
                mute = true;
                $('.mute').css({'color':'#ecf0f1'});
                $('.volume').val(0);
            }
            else {
                mute = false;
                $('.mute').css({'color':'#000000'});
                $('.volume').val(100);
            }
            Song.muted = mute;
        }
    });
    $('.volume').on('change', function () {
        var val = $(this).val();
        if (Song) {
            volume = val/100;
            Song.volume = volume;
            if (val == 0) {
                mute = true;
                $('.mute').css({'color':'#ecf0f1'});
            }
            else if (val > 0) {
                mute = false;
                $('.mute').css({'color':'#000000'});
            }
        }
    });
    $('.range').on('mouseenter', function () {
        if (Song) {
            var
            id = $('.play-pause').attr('id'),
            offset = $(this).offset(),
            dur = songs[id][3],
            w = $(this).width();
            $('.setTime').show();
            $('.range').on('mousemove', function(e){
                var
                    x = e.pageX - offset.left,
                    xproc = (x*100)/w,
                    sec = (xproc*dur)/100;


                var zerosR = "";
                var timeR;
                timeR = parseInt(sec%60);
                if (timeR < 10) zerosR = 0;



                $('.setTime').css({'left':x-10});
                $('.setTime').text(parseInt(sec/60)+':'+zerosR+timeR);
                $('.range').on('click', function(){
                    xproc = xproc-100;
                    $('.progress').css({'left':xproc+'%'});
                    Song.currentTime = sec;
                });
            });
        }
    });
    $('.range').on('mouseout', function(){
        $('.setTime').hide();
    });






    $('.mute').on('mousemove', function(){
        $('.volume').show(800);
        $('.mute').addClass("mute-hide");

    });

});