function goToHome() {
    window.location.href = "home.html";
}

let isPlaying = false;
const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('botaoPlay');
const barraProgresso = document.getElementById('barraDeProgresso');
const tempoPercorrido = document.getElementById('tempoPercorrido');
const tempoRestante = document.getElementById('tempoRestante');

audio.volume = 0.2;

function pausePlayButton() {
    if (isPlaying) {
        audio.pause();
        playButton.innerHTML = '<img src="img/icon/player/play.png" class="flex h-[50px] w-[50px]" alt="Play">';
    } else {
        audio.play();
        playButton.innerHTML = '<img src="img/icon/player/pause.png" class="flex h-[50px] w-[50px]" alt="Pause">';
        updateProgress();
    }
    isPlaying = !isPlaying;
}

// Função para atualizar a barra de progresso do áudio
function updateProgress() {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * 100;
    barraProgresso.style.width = progress + '%';

    // Atualizar tempo percorrido e restante
    const minutosPercorridos = Math.floor(currentTime / 60);
    const segundosPercorridos = Math.floor(currentTime % 60);
    tempoPercorrido.textContent = `${minutosPercorridos}:${segundosPercorridos < 10 ? '0' + segundosPercorridos : segundosPercorridos}`;

    const minutosRestantes = Math.floor((duration - currentTime) / 60);
    const segundosRestantes = Math.floor((duration - currentTime) % 60);
    tempoRestante.textContent = `-${minutosRestantes}:${segundosRestantes < 10 ? '0' + segundosRestantes : segundosRestantes}`;
}

// Atualizar a barra de progresso enquanto o áudio toca
audio.addEventListener('timeupdate', updateProgress);