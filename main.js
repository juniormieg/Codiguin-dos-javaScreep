function mostraSenha() {
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value
    let nome = document.getElementById("name")
    console.log(password)
    nome.innerHTML = `seu login é: ${login}, sua senha é: ${password}`
}