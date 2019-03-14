var largura = 0
var altura = 0
var vidas = 1;
var tempo = 10;
function ajustaAreaJogo() {
    altura = innerHeight;
    largura = innerWidth;
}

    ajustaAreaJogo()
var cronometro = setInterval(function(){
    tempo--
    if(tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
},1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas>3){
            //gameOver
            window.location.href = 'fimJogo.html'
        }
        document.getElementById('v'+vidas).src = 'image/coracao_vazio.png'
        vidas++
    }
    var posicaox = Math.floor(Math.random() * largura) -70
    var posicaoy = Math.floor(Math.random() * altura) -70
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy
    var mosquito = document.createElement('img')
    mosquito.src="image/mosquito.png"
    mosquito.className = tamanhoAleatorio()+" "+ladoAleatorio()
    mosquito.style.left = posicaox + "px"
    mosquito.style.top = posicaoy + "px"
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function (){
        this.remove();
    }

    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}