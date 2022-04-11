
var altura = 0 
var largura = 0
var vidas = 1
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    var criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris'){
    var criaMosquitoTempo = 750
}


// definir dimensões do palco
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//criando o cronometro da partida
var cronometro = setInterval(function(){
    tempo -= 1

    //se o cronometro zerar não rodará negativo
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
},1000)

function posicaoRandomica(){

    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    //controlando as vidas perdidas no jogo
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    }
    document.getElementById('v' + vidas).src = '/appMataMosquito/img/coracao_vazio.png'
    vidas++
    }

    // criando posição randômica para o mosquito
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY =  Math.floor(Math.random() * altura) - 90


    //corrigindo erro de posição negativa do mosquito
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)


    //criar elemento html do mosquito
    var mosquito = document.createElement('img')
    mosquito.src = '/appMataMosquito/img/mosca.png'
    mosquito.className = tamanhoAleatório() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}
// tamanhos randômicos aleatórios do mosquito
function tamanhoAleatório(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }
}


//invertendo a posição do mosquito aleatoriamente
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
console.log(ladoAleatorio())
