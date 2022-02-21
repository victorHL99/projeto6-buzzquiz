/*----- VARIÁVEIS GLOBAIS ----- */



//função para adicionar uma a classe de resposta escolhida aonde foi clicada
function escolherResposta(alternativaEscolhida) {
    alternativaEscolhida.classList.remove("alternativa-respostas-pergunta-quizz")
    alternativaEscolhida.classList.add("alternativa-escolhida")
    esbranquicarAlternativas();
    adicionarClasseRespondida();


}

// função para esbranquiçar as opções que não foram escolhidas
function esbranquicarAlternativas() {
    let adicionarOpacidade = document.querySelectorAll(".alternativa-respostas-pergunta-quizz")
    for (let i = 0; i < adicionarOpacidade.length; i++) {
        adicionarOpacidade[i].classList.add("diminui-opacidade")

    }
}

// função para adicionar a classe respondida na pergunta do quizz
function adicionarClasseRespondida() {
    let teste = document.querySelector(".pergunta-quizz")
    teste.classList.add("respondida")
    setTimeout(mostrarResultado, 2000);

}


// função deve mostrar a parte de resultado assim que tdoas as perguntas
// tiverem sido respondidas
function mostrarResultado() {
    let containerPerguntas = document.querySelector(".pergunta-quizz")
    let removerClasseEscondido = document.querySelector(".quizz-finalizado")

    if (containerPerguntas.classList.contains('respondida') && containerPerguntas.classList.contains('pergunta-quizz')) {
        console.log("deu certo")
        console.log(removerClasseEscondido)
        removerClasseEscondido.classList.remove("escondido")
    } else {
        console.log("deu ruim")

    }

}


function verificarResposta() {
    // deve receber cor vermelha ou verde, de acordo com resposta certa ou errada

    // se a resposta possuir a tag de isCorrectAnswer === true adicionar a classe resposta certa
    // se a respota possuir a tag isCorrectAnswer === false adicionar a tag de de respota errada
}