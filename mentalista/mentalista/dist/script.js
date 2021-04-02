var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {

  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if(numeroSecreto == chute) {
    alert("Acertou !")
    alert("Fim de jogo")
    break
    
  } else if(chute > numeroSecreto) {
    alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if(chute < numeroSecreto) {
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } 
}

if (chute != numeroSecreto)
  alert("Fim de jogo, você não acertou e suas tentativas acabaram. ")