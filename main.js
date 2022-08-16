function mostraSenha() {
    let password = document.getElementById("password").value
    let nome = document.getElementById("name")
    console.log(password)
    nome.innerHTML = `sua senha é: ${password}`
}