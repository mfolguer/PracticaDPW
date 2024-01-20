document.addEventListener('DOMContentLoaded', function () {
    var hamburgerBtn = document.querySelector('.hamburger-btn');
    var menuList = document.querySelector('.menu-list');

    hamburgerBtn.addEventListener('click', function () {
        menuList.classList.toggle('show');

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


