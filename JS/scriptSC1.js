/*----- FUNÇÃO PARA OBTER QUIZZ DO SERVIDOR ----- */

function obterQuizz(){
const promiseQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
promiseQuizz.then(mostrarQuizz)
console.log(promiseQuizz)
}

function mostrarQuizz(resposta){
    let i = 0;
    let quizzes = resposta.data;
    let listaQuizzesServidor = document.querySelector(".lista-quizz-servidor")
    listaQuizzesServidor.innerHTML = "";

    for(i =0; i <= quizzes.length; i++){
        const quizz = quizzes[i];
        if(quizz.id === quizzes[i]){
            listaQuizzesServidor.innerHTML += `
            <div class="display-quizz">
                <div class="imagem-quizz">
                    <div class="titulo-quizz">Acerte os personagens corretos dos Simpsons e prove seu amor!
                        </div>
                </div>
            </div>`

        }
    }

}