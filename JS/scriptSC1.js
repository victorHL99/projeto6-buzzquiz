/*----- FUNÇÃO PARA OBTER QUIZZ DO SERVIDOR ----- */

function obterQuizz(){
const promiseQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
promiseQuizz.then(console.log)
}
obterQuizz();

/* Função para mostrar a tela dois quando clicar no quizz */
function abrirTelaDois(){
    let corpo = document.querySelector("main")
    corpo.innerHTML = ` <div class="tela-dois">
    <div class="topo-quizz">
        <p>Você entende bem sobre as praias do Brasil?</p>
    </div>

    <div class="pergunta-quizz">
        <div class="topo-pergunta-quizz">
            <p>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</p>
        </div>
        <div class="respostas-pergunta-quizz">
            <div  onclick="escolherResposta(this)" class="alternativa-respostas-pergunta-quizz">
                <div class="img"></div>
                <p>Gatíneo 1</p>
            </div>
            <div onclick="escolherResposta(this)" class="alternativa-respostas-pergunta-quizz">
                <div class="img"></div>
                <p>Gatíneo 2</p>
            </div>
            <div onclick="escolherResposta(this)" class="alternativa-respostas-pergunta-quizz">
                <div class="img"></div>
                <p>Gatíneo 3 </p>
            </div>
            <div onclick="escolherResposta(this)" class="alternativa-respostas-pergunta-quizz">
                <div class="img"></div>
                <p>Gatíneo 4</p>
            </div>
        </div>
    </div>`
}

