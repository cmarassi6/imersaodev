var cartaMaria = {
    nome: "Homem Aranha",
    imagem: "https://s.aficionados.com.br/imagens/frases-homem-aranha_f.png",
    atributos: {
        ataque: 50,
        defesa: 60,
        magia: 70
    }
}

var cartaJose = {
    nome: "Thor",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRBX_uXqF7ax9_EpRmxt5sgW5vuujBBx_sg&usqp=CAU",
    atributos: {
        ataque: 60,
        defesa: 80,
        magia: 100
    }
}

var cartaSoares = {
    nome: "Homem de Ferro",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8RC5rfEJGJ2i7TEDQyM7fjA0DOzwaLgIrQ&usqp=CAU",
    atributos: {
        ataque: 70,
        defesa: 80,
        magia: 90
    }
}

var cartaMarassi = {
    nome: "Pinguim",
    imagem: "https://i.pinimg.com/236x/d0/8c/d8/d08cd8a942050eb53931d25d053c840d--batman--danny-devito.jpg",
    atributos: {
        ataque: 50,
        defesa: 60,
        magia: 70
    }
}

var cartaCesar = {
    nome: "Coringa",
    imagem: "https://studiosol-a.akamaihd.net/tb/letras-blog/wp-content/uploads/2020/10/88d94bb-trilha_sonora_coringa_1390x780-1.jpg",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var cartaPaulo = {
    nome: "Batman & Robin",
    imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/03/batman_and_robin_06_wide-ecf51a019b410af289e62e1ff88c33a2334f8a6e.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        força: 90
    }
}
var cartaRafa = {
    nome: "Mulher Maravilha",
    imagem:"https://www.acritica.com/uploads/news/image/781262/show_Sem_t_tulo_44C1E65D-DE3E-49D7-88E8-8FDFA52F15B5.jpg",	
    atributos: {
        ataque: 70,
        defesa: 65,
        força: 85
    }
}
var cartaGui = {
    nome: "Superman",
    imagem:"https://vejasp.abril.com.br/wp-content/uploads/2018/05/capa6.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        força: 90
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaMaria, cartaJose, cartaSoares, cartaMarassi, cartaCesar, cartaPaulo, cartaRafa, cartaGui]
// 0          1             2             3           4          5          6          7            8

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById(`quantidade-cartas`)
  var html = "Quantidade de Cartas no Jogo: " + cartas.length
  
  divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
  var divPlacar = document.getElementById(`placar`)
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  
  divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
  

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosJogador++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
  if (cartas.length == 0){
    alert("Fim de jogo")
    if (pontosJogador > pontosMaquina){
     htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador){
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  } else {
    document.getElementById(`btnProximaRodada`).disabled = false
  }

    divResultado.innerHTML = htmlResultado
    document.getElementById(`btnJogar`).disabled = true
    document.getElementById(`btnProximaRodada`).disabled = false
  
  atualizaPlacar()  
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById(`cartas`)
  
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById(`btnSortear`).disabled = false
  document.getElementById(`btnJogar`).disabled = true
  document.getElementById(`btnProximaRodada`).disabled = true
  
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = "" 
}