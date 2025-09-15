// ------ FORMULÁRIO -------


const emailInput = document.querySelector('#email')
const senhaInput = document.querySelector('#senha')
const confirmaSenhaInput = document.querySelector('#confirmaSenha')
const botaoConfirmar = document.querySelector("#btnConfirmar")
const msgErro = document.querySelector(".msg-erro")
// ---- VALIDAÇÃO ----
// Quando clicar no botão, roda a função abaixo
botaoConfirmar.addEventListener("click", (e) => {
    // Impede que a página recarregue ao enviar o formulário  
    e.preventDefault()

    // Pega os valores digitados e remove espaços extras
    const email = emailInput.value.trim()
    const senha = senhaInput.value.trim()
    const confirma = confirmaSenhaInput.value.trim()

    // Verifica se o e-mail tem @   
    if (!email.includes("@")) {
        msgErro.textContent = "Digite um E-mail válido!"
        return
    }

    // Verifica se algum campo de senha está vazio   
    if (senha === "" || confirma === "") {
        msgErro.textContent = "Preencha todos os campos de senha!"
        return
    }

    // Verifica se as senhas são iguais
    if (senha !== confirma) {
        msgErro.textContent = "As senhas não conferem!"
        return
    }

    //Se passou pelas verificações, da sucesso
    msgErro.textContent = "Cadastro realizado! Muito obrigado!"
})

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com a classe 'card'
    const cards = document.querySelectorAll('.card')

    // Adiciona um ouvinte de evento de clique a cada card
    cards.forEach(card => {
        // Quando  o mouse entra no card dispara o evento
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-zoom') // Adiciona a classe 'card-zoom' para aplicar o efeito de zoom
        })


        // Quando o mouse sai do card dispara o evento
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-zoom') }) 
    })

})

