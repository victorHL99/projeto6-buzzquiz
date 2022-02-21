

//função para adicionar uma a classe de resposta escolhida aonde foi clicada
function escolherResposta(alternativaEscolhida){
    alternativaEscolhida.classList.remove("alternativa-respostas-pergunta-quizz")
    alternativaEscolhida.classList.add("alternativa-escolhida")
    esbranquicarAlternativas();
}

// função para esbranquiçar as opções que não foram escolhidas
function esbranquicarAlternativas(){
    let adicionarOpacidade = document.querySelectorAll(".alternativa-respostas-pergunta-quizz")
    for(let i=0; i<adicionarOpacidade.length; i++){
    adicionarOpacidade[i].classList.add("diminui-opacidade")
    }
}

function verificarResposta(){
    // deve receber cor vermelha ou verde, de acordo com resposta certa ou errada

    // se a resposta possuir a tag de isCorrectAnswer === true adicionar a classe resposta certa
    // se a respota possuir a tag isCorrectAnswer === false adicionar a tag de de respota errada
}

// após 2 segundos deve passar para a proxima pergunta 

