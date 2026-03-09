// ======================== FUNÇÕES DE NAVEGAÇÃO ========================
function goToHome() {
    localStorage.setItem("BobSelecionado", "0");
    window.location.href = "home.html";

    // Ajusta o tempo meditado TOTAL do usuario
    segundos = Number(localStorage.getItem("SegundosPercorridos"));
    total = Number(localStorage.getItem("TempoMeditadoTotal"));
    minutos = Number(localStorage.getItem("sessoesPercorridas"));

    segundos = segundos + (minutos * 60);
    
    total += segundos;

    localStorage.removeItem("TempoMeditadoTotal");
    localStorage.setItem("TempoMeditadoTotal", total);
}

// ======================== ELEMENTOS DO DOM ========================
const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('botaoPlay');
const barraProgresso = document.getElementById('barraDeProgresso');
const tempoPercorrido = document.getElementById('tempoPercorrido');
const tempoRestante = document.getElementById('tempoRestante');
const background = document.getElementById('background');
const nomeObjetivo = document.getElementById('objetivo');
const imagemAnimada = document.getElementById('imagemBobPlayer');
const BobSelecionado = localStorage.getItem("BobSelecionado");
// ANIMAÇÃO ENTRADA
const botaoSair = document.getElementById('botaoSair');
const imagemComAnimacaoPlayer = document.getElementById('imagemComAnimacaoPlayer');
const barraAudio = document.getElementById('barraAudio');
const botaoMusica = document.getElementById('botaoMusica');
const nomeObjetivoPrincipal = document.getElementById ('nomeObjetivoPrincipal');
let minutos;
let tempoMeditadoNaSessao;
let tempoMeditado;
let isPlaying = false;
// Animação BOB
let rotate = 0;
let zoom = 0;
let estado = 0;

// ======================== CONFIGURAÇÃO INICIAL ========================
audio.volume = 0.2;


// Aplica o estilo baseado na escolha
switch (BobSelecionado) {
    case "1":
        setTimeout(() => {
            estilizarBob1();
            animarBob1();
            localStorage.setItem("sessoesPercorridas", 0);
        },2000);
        break;
    case "2":
        setTimeout(() => {
            estilizarBob2();
            animarBob2();
            localStorage.setItem("sessoesPercorridas", 0);
        }, 2000);
        break;
    case "3":
        setTimeout(() => {
            estilizarBob3();
            animarBob3();
            localStorage.setItem("sessoesPercorridas", 0);
        }, 2000);
        break;
    default:
        goToHome(); // redireciona se nenhum Bob foi selecionado
}

// ======================== FUNÇÃO PLAY/PAUSE ========================
function pausePlayButton() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<img src="img/icon/player/play.png" class="h-[50px] w-[50px]" alt="Play">';
    } else {
        audio.play();
        playButton.innerHTML = '<img src="img/icon/player/pause.png" class="mb-5 h-full w-auto" alt="Pause">';
        updateProgress(); // inicia atualização da barra
    }
    isPlaying = !isPlaying;
}

// ======================== FUNÇÃO ATUALIZAÇÃO DA BARRA ========================
function updateProgress() {
    const duration = 60;
    const currentTime = audio.currentTime;
    if (!duration) return; // evita NaN no carregamento inicial

    if(currentTime <= duration){    
        const progress = (currentTime / duration) * 100;
        barraProgresso.style.width = progress + '%';
    
        // Atualiza tempo percorrido
        const minutosPercorridos = Math.floor(currentTime / duration);
        const segundosPercorridos = Math.floor(currentTime % duration);
        localStorage.removeItem("SegundosPercorridos");
        localStorage.setItem("SegundosPercorridos", segundosPercorridos);
        tempoPercorrido.textContent = `${minutosPercorridos}:${segundosPercorridos < 10 ? '0' + segundosPercorridos : segundosPercorridos}`;
    
        // Atualiza tempo restante
        const minutosRestantes = Math.floor((duration - currentTime) / duration);
        const segundosRestantes = Math.floor((duration - currentTime) % duration);
        tempoRestante.textContent = `-${minutosRestantes}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
    }else{
        audio.currentTime = 0;
        switch (BobSelecionado) {
            case "1":
                sessoesConcluidas = localStorage.getItem("sessoesBob1");
                sessoesConcluidas ++;
                localStorage.setItem("sessoesBob1", sessoesConcluidas);
                break;
            case "2":
                sessoesConcluidas = localStorage.getItem("sessoesBob2");
                sessoesConcluidas ++;
                localStorage.setItem("sessoesBob2", sessoesConcluidas);
                break;
            case "3":
                sessoesConcluidas = localStorage.getItem("sessoesBob3");
                sessoesConcluidas ++;
                localStorage.setItem("sessoesBob3", sessoesConcluidas);
                break;
        }
        let sessoesPercorridas = localStorage.getItem("sessoesPercorridas");
        sessoesPercorridas ++;
        localStorage.setItem("sessoesPercorridas", sessoesPercorridas);
    }

}
// ================================= ANIMAÇÃO BOB ===================================

// ======================== BOB 1 ========================
function animarBob1() {
    imagemAnimada.classList.remove("-rotate-10", "rotate-10");

    if (rotate == 0) {
        imagemAnimada.classList.add("rotate-10");
        rotate = 1;
        setTimeout(animarBob1, 1200);

    } else {
        imagemAnimada.classList.add("-rotate-10");
        rotate = 0;
        setTimeout(animarBob1, 1200);
    }
}

// ======================== BOB 2 ========================
function animarBob2() {
    if (zoom == 0) {
        imagemAnimada.classList.remove("translate-x-1");
        imagemAnimada.classList.add("-translate-x-2");
        zoom = 1;
    } else {
        imagemAnimada.classList.remove("-translate-x-2");
        imagemAnimada.classList.add("translate-x-1");
        zoom = 0;
    }
    setTimeout(animarBob2, 1000);
}

// ======================== BOB 3 ========================
function animarBob3() {
    // Remove todas as transformações
    imagemAnimada.classList.remove(
        "translate-x-3",
        "-translate-x-3",
        "-translate-y-2"
    );

    if (estado == 0) {
        imagemAnimada.classList.add("-translate-x-3", "-translate-y-2");
        estado = 1;
    } else if (estado == 1) {
        // pausa, mantém posição
        estado = 2;
    } else if (estado == 2) {
        imagemAnimada.classList.add("translate-x-3", "-translate-y-2");
        estado = 3;
    } else {
        estado = 0;
    }

    setTimeout(animarBob3, 1000);
}

// ======================== ANIMAR ENTRADA ========================

function animarEntrada(){
    setTimeout(() => {
        botaoSair.classList.remove('opacity-0');
        imagemComAnimacaoPlayer.classList.remove('opacity-0');
        barraAudio.classList.remove('opacity-0');
        botaoMusica.classList.remove('opacity-0');
        nomeObjetivoPrincipal.classList.remove('opacity-0');
    },300);

}

// ======================== FUNÇÕES DE ESTILIZAÇÃO ========================
function estilizarBob1() {
    background.classList.add('bg-green-200');
    barraProgresso.classList.add('bg-green-500');
    nomeObjetivo.textContent = "FICAR SUSSA";
    imagemAnimada.src = "img/BobObjetivos/BobSussa.PNG"
    animarEntrada();
}

function estilizarBob2() {
    background.classList.add('bg-red-200');
    barraProgresso.classList.add('bg-red-500');
    nomeObjetivo.textContent = "FOCAR NA TAREFA";
    imagemAnimada.src = "img/BobObjetivos/BobOlhaFoca.PNG";
    animarEntrada();
}

function estilizarBob3() {
    background.classList.add('bg-blue-200');
    barraProgresso.classList.add('bg-blue-500');
    nomeObjetivo.textContent = "DORMIR DE BOAS";
    imagemAnimada.src = "img/BobObjetivos/BobDormir.PNG";
    animarEntrada();
}

// =================================== Atualiza a barra de progesso automaticamente ================================

audio.addEventListener('timeupdate', updateProgress);