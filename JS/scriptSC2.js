

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
// deve receber cor vermelha ou verde, de acordo com resposta certa ou errada

// após 2 segundos deve passar para a proxima pergunta 