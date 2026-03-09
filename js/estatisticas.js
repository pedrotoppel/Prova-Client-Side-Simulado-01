function voltar(){
    window.location.href = "home.html";
}

const imagem = document.getElementById('imagem');
const numeroDeSessoes = document.getElementById('numeroMeditacoes');
const tempoTotalMeditando = document.getElementById('tempoTotalMeditando');
const objetivoMaisUsado = document.getElementById('objetivoMaisUsado');
const sessoesBob1 = Number(localStorage.getItem("sessoesBob1"));
const sessoesBob2 = Number(localStorage.getItem("sessoesBob2"));
const sessoesBob3 = Number(localStorage.getItem("sessoesBob3"));
const tempoTotal = Number(localStorage.getItem('TempoMeditadoTotal'));

let rotate = 0;
let sessoesTotais;
let tempoSegundos;
let tempoMinutos;
let objetivo;

// Quantidade de Sessões Realizadas
sessoesTotais = sessoesBob1 + sessoesBob2 + sessoesBob3;

// Tempo total meditado
tempoSegundos = tempoTotal % 60;
tempoMinutos = Math.trunc(tempoTotal / 60);

numeroDeSessoes.textContent = sessoesTotais;
if(tempoSegundos < 10){
    tempoTotalMeditando.textContent = "0" + tempoMinutos + ":" + tempoSegundos
}else{
    tempoTotalMeditando.textContent = tempoMinutos + ":" + tempoSegundos
}

// Objetivo mais utilizado

if(sessoesBob1 >= sessoesBob2 && sessoesBob1 >= sessoesBob3){
    objetivoMaisUsado.textContent = "FICAR SUSSA"
}else if(sessoesBob2 >= sessoesBob1 && sessoesBob2 >= sessoesBob3){
    objetivoMaisUsado.textContent = "FOCAR NA TAREFA"
}else{
    objetivoMaisUsado.textContent = "DORMIR DE BOAS"
}

// Animação

function animarImagem(){
    imagem.classList.remove("-rotate-10", "rotate-10");

    if (rotate == 0) {
        imagem.classList.add("rotate-10");
        rotate = 1;
        setTimeout(animarImagem, 1200);

    } else {
        imagem.classList.add("-rotate-10");
        rotate = 0;
        setTimeout(animarImagem, 1200);
    }
}

animarImagem();