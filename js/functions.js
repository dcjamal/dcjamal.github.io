function toggleMute() {

    var video = document.getElementById("video")

    if (video.muted) {
        video.muted = false;

    } else {
        video.muted = true;
    }




}

document.querySelector('i').addEventListener('click', fav);

function fav(e) {
    var tgt = e.target;
    tgt.classList.toggle('fa-volume-mute');
    tgt.classList.toggle('fa-volume-up');
}