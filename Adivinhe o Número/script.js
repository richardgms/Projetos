var paragrafo = document.getElementById("resultado")
const btnJN = document.querySelector("#jogarNovamente")
var btn = document.getElementById("btnEscolher")
var iptText = document.getElementById("iptNumber")
var iptTextDiv = document.getElementById("iptTextDiv")
var contador = 10
var numeroSecreto = parseInt(Math.random() * 101)
var chances = document.querySelector("#chances")

document.addEventListener("keypress", function (e){
  if(e.key === "Enter"){
    const butn = document.querySelector("#submit");
    butn.click();
  }
})

    function verificar(){
      
      var numeroEscolhido = document.getElementById("iptNumber").value
      var botao = document.getElementById("submit")
      var novoJogo = document.getElementById("jogarNovamente")

        if (contador == 0){
          paragrafo.innerHTML = "Suas chances acabaram."
          chances.style.visibility = "hidden"
          paragrafo.style.marginTop = "35px"
          btn.style.position = "absolute"
          botao.style.transition = "0s"
          botao.style.visibility = "hidden"
          novoJogo.style.visibility = "visible"

      }
        else if (numeroEscolhido > 100 || numeroEscolhido < 0 || numeroEscolhido == "") {
          paragrafo.innerHTML = `Escolha um número entre 0 e 100.`
          document.getElementById("iptNumber").value = ""
      }     
        else if (numeroSecreto < numeroEscolhido) {
          contador = contador - 1
          paragrafo.innerHTML = `Que pena, você errou! O número secreto é <strong>menor</strong> do que ${numeroEscolhido}!`
          chances.innerHTML = `Você ainda tem <strong>${contador}</strong> chances.`
          document.getElementById("iptNumber").value = ""
      }
        else if (numeroSecreto > numeroEscolhido) {
          contador = contador - 1
          paragrafo.innerHTML = `Que pena, você errou! O número secreto é <strong>maior</strong> do que ${numeroEscolhido}!`
          chances.innerHTML = `Você ainda tem <strong>${contador}</strong> chances.`
          document.getElementById("iptNumber").value = ""
      }
        else if (numeroSecreto == numeroEscolhido){
          paragrafo.innerHTML = `Parabéns, você acertou! O número era o ${numeroSecreto}.`
          paragrafo.style.marginTop = "35px"
          btn.style.position = "absolute"
          iptTextDiv.style.position = "absolute"
          botao.style.transition = "0s"
          botao.style.visibility = "hidden"
          novoJogo.style.visibility = "visible"
          iptText.style.visibility = "hidden"
          chances.style.visibility = "hidden"
          document.getElementById("iptNumber").value = ""
      }
        
      btnJN.addEventListener('click', () => {
        location.reload()
      }

      )}


