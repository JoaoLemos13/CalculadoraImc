

peso.addEventListener("blur", () =>  {
let mensagem = document.getElementById("mensagemErroPeso")    
if (peso.value == "") {
mensagem.innerHTML = `Digite seu peso`
} else {
    mensagem.style.display ="none"
}

})

altura.addEventListener("blur", () =>  {
    let mensagem = document.getElementById("mensagemErroAltura")    
    if (altura.value == "") {
    mensagem.innerHTML = `Digite sua Altura`
    } else {
        mensagem.style.display ="none"
    }
    
    })