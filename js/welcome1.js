const botao = document.getElementById("botao");

const acesso = localStorage.getItem('PrimeiroAcesso')
if(acesso == 1){
    window.location.href = "home.html"
}

function mudarPagina(){
    window.location.href = "welcome2.html";
}