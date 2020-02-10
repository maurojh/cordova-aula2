function soma(a, b) {
    return a + b;
}

function executa() {
    var campox = document.getElementById("x");
    var campoy = document.getElementById("y");
    var x = parseInt(campox.value);
    var y = parseInt(campoy.value);
    var saida = document.getElementById("tela");
    
    saida.innerHTML = soma(x, y);
}

function inicio() {
    var botao = document.getElementById("botao");
    botao.addEventListener('click', executa);
}

window.onload = function() {
    inicio();
}