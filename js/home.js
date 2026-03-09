const deBoas = document.getElementById("deBoas");
const Bob1 = document.getElementById("Bob1");
const Bob2 = document.getElementById("Bob2");
const Bob3 = document.getElementById("Bob3");
const acesso = localStorage.getItem('PrimeiroAcesso');

// Verificação LocalStorage
if(acesso == null){
    window.location.href = "welcome1.html";
};
// REDIRECIONAMENTO

function goToVoltar() {
    window.location.href = "welcome1.html";
    localStorage.setItem('PrimeiroAcesso', "0")
}

function goToStats() {
    window.location.href = "estatisticas.html";
}

function goToPlayerBob1() {
    animarSaidaBob1();
    setTimeout(() => {
        window.location.href = "player.html";
        localStorage.setItem("BobSelecionado", "1");
    },2500);
}

function goToPlayerBob2() {
    animarSaidaBob2();
    setTimeout(() => {
        window.location.href = "player.html";
        localStorage.setItem("BobSelecionado", "2");
    },2500)
}

function goToPlayerBob3() {
    animarSaidaBob3();
    setTimeout(() => {
        window.location.href = "player.html";
    localStorage.setItem("BobSelecionado", "3");
    },2500);
    
}

// ANIMAÇÃO

//===== BOB 1 ========
let rotate = 0;

function animarBob1() {

    Bob1.classList.remove("rotate-10", "-rotate-10")

    if (rotate == 0) {
        Bob1.classList.add("rotate-10");
        rotate = 1;

        setTimeout(animarBob1, 1000);

    } else {
        Bob1.classList.add("-rotate-10");
        rotate = 0;

        setTimeout(animarBob1, 1000);
    }
}
animarBob1();

//===== BOB 2 ========

function animarBob2() {

    Bob2.classList.toggle("-translate-x-3");
    setTimeout(animarBob2, 1000);

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

// =============================== Animação de Saida =============================

const header = document.getElementById('header');
const buttonBob1 = document.getElementById('buttonBob1');
const buttonBob2 = document.getElementById('buttonBob2');
const buttonBob3 = document.getElementById('buttonBob3');
const fundoPrincipal = document.getElementById('fundoPrincipal');

// ========================== Saida Bob 1 =================================

function animarSaidaBob1(){

    buttonBob2.classList.add('opacity-0');
    buttonBob3.classList.add('opacity-0');
    header.classList.add('opacity-0');

    setTimeout(() => {
        fundoPrincipal.classList.add('bg-green-200');
        setTimeout(() => {
            buttonBob1.classList.add('opacity-0');
        },300)
    },1000)
    
}

// ========================== Saida Bob 2 =================================

function animarSaidaBob2(){

    buttonBob1.classList.add('opacity-0');
    buttonBob3.classList.add('opacity-0');
    header.classList.add('opacity-0');

    setTimeout(() => {
        fundoPrincipal.classList.add('bg-red-200');
        setTimeout(() => {
            buttonBob2.classList.add('opacity-0');
        },300)
    },1000)
    
}

// ========================== Saida Bob 3 =================================

function animarSaidaBob3(){

    buttonBob1.classList.add('opacity-0');
    buttonBob2.classList.add('opacity-0');
    header.classList.add('opacity-0');

    setTimeout(() => {
        fundoPrincipal.classList.add('bg-blue-200');
        setTimeout(() => {
            buttonBob3.classList.add('opacity-0');
        },300)
    },1000)
    
}