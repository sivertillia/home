
var dataSrc = document.querySelector('.player');
var dataPost = document.querySelector('.player');
src = dataSrc.dataset.src;
poster = dataPost.dataset.poster;
htmlplayer = '<video poster="'+poster+'" src="'+src+'" id="video-player"></video><div class="controls none"><div class="progress_bar"><input type="range" class="progress" id="progress" value="0" max="1000000"></div><div class="button_controls"><div style="float: left;"><i class="fa fa-play play_pause" id="play-pause" aria-hidden="true"></i><input type="range" id="volume" min="0" max="100" value="100"><span class="out"><span id="out">00:00</span>/<span id="time">00:00</span></span></div><div style="float: right;"><i class="pic_in_pic" id="pic-in-pic" aria-hidden="true"></i><i class="fullscreen" id="fullscreen" aria-hidden="true"></i></div><button class="none" id="stop">Stop</button><button class="none" id="speed-up">speed+</button><button class="none" id="speed-down">speed-</button><button class="none" id="speed-normal">speed-none</button></div><div class="tine"></div></div><div class="playback_box"><div class="playback"></div></div>';
document.querySelector(".player").innerHTML = htmlplayer;



document.querySelector('#play-pause').onclick = play;
document.querySelector('#stop').onclick = stop;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#volume').oninput = volume;
document.querySelector('#pic-in-pic').onclick = PictureInPicture;
document.querySelector('#fullscreen').onclick = fullScreen;

document.querySelector('#video-player').ondblclick = fullScreen;
document.querySelector('.player').oncontextmenu = rightClick;

document.querySelector('#video-player').onclick = play;
document.querySelector('.playback_box').onclick = play;



var video;
var display;
var progress;
var player;
var playPause

video = document.querySelector('#video-player');
progress = document.querySelector('#progress');
player = document.querySelector('.player');
playPause = document.querySelector('#play-pause');
fullscreen = document.querySelector('#fullscreen');
controls = document.querySelector('.controls');
playbackbox = document.querySelector('.playback_box');
// !!!!!
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;
function play() {
    time_absolute();
    if (video.paused) {
        video.play();
        controls.classList.remove('none');
        playbackbox.classList.add('none');
        playPause.classList.remove('fa-play');
        playPause.classList.add('fa-pause');
    }
    else {
        video.pause()
        playPause.classList.remove('fa-pause');
        playPause.classList.add('fa-play');
        controls.classList.remove("none");
        player.classList.remove("none_mouse");
    }
}
function pause() {
    video.pause();
}
function stop() {
    video.pause();
    video.currentTime = 0;
}
function secTimR() {
    video.currentTime += 10;   
}
function secTimL() {
    video.currentTime -= 10;   
}
function speedUp() {
    video.play();
    video.playbackRate = 2;
}
function speedDown() {
    video.play();
    video.playbackRate = 0.5;
}
function speedNormal() {
    video.play();
    video.playbackRate = 1;
}
function volume() {
    var v = this.value;
    video.volume = v/100;
}
function progressUpdate() {
    var d = video.duration;
    var c = video.currentTime;
    var timestamp = video.currentTime;
    progress.value = (1000000 * c) / d;
    var hours = Math.floor(timestamp / 60 / 60);
    var min = Math.floor(timestamp / 60) - (hours * 60);
    var sec = Math.floor(timestamp % 60);

    var zeroh = "";
    var zerom =  "";
    var zeros = "";
    if(hours < 10) zeroh = '0';
    if(min < 10) zerom = '0';
    if(sec < 10) zeros = '0';

    var formatted =  zerom + min + ':' + zeros + sec;
    document.querySelector('#out').innerHTML = formatted;
}
function time_absolute() {
    var time_absolute = video.duration;
    var hours = Math.floor(time_absolute / 60 / 60);
    var minutes = Math.floor(time_absolute / 60) - (hours * 60);
    var seconds = Math.floor(time_absolute % 60);
    var time = minutes + ':' + seconds;
    document.querySelector('#time').innerHTML = time;
}
function videoRewind() {
    var w = this.offsetWidth;
    var o = event.offsetX;
    this.value = 100 * o / w;
    video.pause();
    video.currentTime = video.duration * (o/w);
    video.play();
}
function PictureInPicture() {
    video.requestPictureInPicture();
}
function fullScreen(event) {
    if (document.fullscreenElement) { 
        document.exitFullscreen();
        fullscreen.classList.remove('fullscreen_exit');
        fullscreen.classList.add('fullscreen');
    }
    else { 
        player.requestFullscreen();
        fullscreen.classList.remove('fullscreen');
        fullscreen.classList.add('fullscreen_exit');
    }
}
function rightClick() {
    return false;
}
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyF') {
        fullScreen();
    }
    else if (event.code == "Space") {
        play();
    }
    else if (event.code == "ArrowLeft") {
        secTimL();
    }
    else if (event.code == "ArrowRight") {
        secTimR();
    }
});