console.log("vinisu é muito boi")
const variavelA = 10
let variavelB = 10
// variavelB = 20
console.log("o valor deu: ", variavelA - variavelB)
function mostraNome() {
    let nickname = document.getElementById("nickname").value
    let nome = document.getElementById("name")
    console.log(nickname)
    // let noTexto = document.createTextNode(nickname)
    // nome.innerHTML = "Seu nick e: " + nickname 
    nome.innerHTML = `vinisu é um merda ${nickname} vacilão`
}