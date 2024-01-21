document.addEventListener('DOMContentLoaded', function () {
    var hamburgerBtn = document.querySelector('.hamburger-btn');
    var menuList = document.querySelector('.menu-list');

    hamburgerBtn.addEventListener('click', function () {
        menuList.classList.toggle('show');

    });
});
$(document).ready(function() {
    $('#miCarrusel').carousel({
        interval: 2000,
        pause: 'hover'
    });
});
var c1 = document.querySelector('.c1');
c1.addEventListener('click', function () {
    c1.classList.toggle('vannish');

});
var c2 = document.querySelector('.c2');
c2.addEventListener('click', function () {
    c2.classList.toggle('vannish');

});
var c3 = document.querySelector('.c3');
c3.addEventListener('click', function () {
    c3.classList.toggle('vannish');

});
var c4 = document.querySelector('.c4');
c4.addEventListener('click', function () {
    c4.classList.toggle('vannish');

});
var c5 = document.querySelector('.c5');
c5.addEventListener('click', function () {
    c5.classList.toggle('vannish');

});
var c6 = document.querySelector('.c6');
c6.addEventListener('click', function () {
    c6.classList.toggle('vannish');

});
var c7 = document.querySelector('.c7');
c7.addEventListener('click', function () {
    c7.classList.toggle('vannish');

});
var c8 = document.querySelector('.c8');
c8.addEventListener('click', function () {
    c8.classList.toggle('vannish');

});
var c9 = document.querySelector('.c9');
c9.addEventListener('click', function () {
    c9.classList.toggle('vannish');

});
var c10 = document.querySelector('.c10');
c10.addEventListener('click', function () {
    c10.classList.toggle('vannish');

});
var c11 = document.querySelector('.c11');
c11.addEventListener('click', function () {
    c11.classList.toggle('vannish');

});

function cambiarImagen(nuevaImagen) {
    const portero = document.getElementById('portero');

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState ==4) {
            if (xhr.status == 200) {
                portero.style.backgroundImage = `url('../Resource/${nuevaImagen}')`;
            } else {
                console.error('Error al cargar la nueva imagen');
            }
        }
    };

    xhr.open("GET", `../Resource/${nuevaImagen}`, true);
    xhr.send();
}
const API_KEY = 'AIzaSyDk6-hkZd_MjEiVruYkdwt20n_cb8OZo-8';

const VIDEO_ID = 'MO24NEMa9VU';
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '100',
        width: '200',
        videoId: VIDEO_ID,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
}
function onPlayerStateChange(event) {
}
function getVideoInfo(videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const videoTitle = data.items[0].snippet.title;
            console.log(`Título del video: ${videoTitle}`);
        })
        .catch(error => console.error('Error al obtener información del video:', error));
}

// Llama a la función para obtener información del video
getVideoInfo(VIDEO_ID);

