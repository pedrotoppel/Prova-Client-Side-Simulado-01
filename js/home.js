const deBoas = document.getElementById("deBoas");
const Bob1 = document.getElementById("Bob1");
const Bob2 = document.getElementById("Bob2");
const Bob3 = document.getElementById("Bob3");

// REDIRECIONAMENTO

function goToVoltar() {
    window.location.href = "welcome1.html";
}

function goToStats() {
    window.location.href = "estatisticas.html";
}

function goToPlayerBob1() {
    window.location.href = "player.html";
}

function goToPlayerBob2() {
    window.location.href = "player.html";
}

function goToPlayerBob3() {
    window.location.href = "player.html";
}

// ANIMAÇÃO

//const Bob1 = document.getElementById("Bob1");
//const Bob2 = document.getElementById("Bob2");


//===== BOB 1 ========
let rotate = 0;

function animarBob1() {

    if (rotate == 0) {
        Bob1.classList.toggle("rotate-10");
        rotate = 1;

        setTimeout(animarBob1, 1000);

    } else {
        Bob1.classList.toggle("-rotate-10");
        rotate = 0;

        setTimeout(animarBob1, 1000);
    }
}
animarBob1();

//===== BOB 2 ========
let zoom = 0;

function animarBob2() {

    if (zoom == 0) {
        Bob2.classList.toggle("-translate-x-2");
        zoom = 1;

        setTimeout(animarBob2, 1000);

    } else {
        Bob2.classList.toggle("translate-x-1");
        rotate = 0;

        setTimeout(animarBob2, 1000);
    }
}

animarBob2();

//===== BOB 3 ========
let estado = 0;

function animarBob3() {

    Bob3.classList.remove(
        "translate-x-3",
        "-translate-x-3",
        "-translate-y-2"
    );

    if (estado == 0) {
        Bob3.classList.add("-translate-x-3", "-translate-y-2");
        estado = 1;

    } else if (estado == 1) {
        estado = 2;

    } else if (estado == 2) {
        Bob3.classList.add("translate-x-3", "-translate-y-2");
        estado = 3;

    } else {
        estado = 0;
    }

    setTimeout(animarBob3, 1000);
}

animarBob3();