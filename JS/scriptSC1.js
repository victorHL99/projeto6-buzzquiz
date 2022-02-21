/*----- VARIÁVEIS GLOBAIS ----- */

//const nomeUsuario = prompt("Qual o seu nome de usuario")
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


/*----- FUNÇÃO PARA OBTER QUIZZ DO SERVIDOR ----- */

function obterQuizz() {
    const promiseQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promiseQuizz.then(console.log)
    promiseQuizz.then(mostrarQuizzes)
    
}
obterQuizz();

// função para mostrar os quizzes na tela (NÃO RESOLVI O PROBLEMA AINDA)
function mostrarQuizzes(resposta) {
    let i = 0;
    let imagemQuizz = document.querySelector(".imagem-quizz");
    let tituloQuizz = document.querySelector(".titulo-quizz");
    let todosQuizzes = document.querySelector(".lista-quizz-servidor")
    let tamanhoArray = resposta.data.length

    imagemQuizz.src = resposta.data[i].image
    tituloQuizz.src = resposta.data[i].title
    
    todosQuizzes.innerHTML = ``
    for (i; i < tamanhoArray; i++) {
        todosQuizzes.innerHTML += `
        <div class="lista-quizz-servidor">
        <div class="display-quizz" onclick="abrirTelaDois()">
        <div class="imagem-quizz">
        <img src=${resposta.data[i].image} alt="">
        <div class="titulo-quizz">${resposta.data[i].title}</div>
        </div>
        </div>
        </div>`

        imagemQuizz.style.url = `${resposta.data[i].image}`
        console.log(imagemQuizz.style.url)

    }
}


/* Função para mostrar a tela dois quando clicar no quizz */
function abrirTelaDois() {
    let fecharTelaUm = document.querySelector(".tela-um")
    let abrirTelaDois = document.querySelector(".tela-dois")
    let fecharTelaTres = document.querySelector(".tela-tres")


    abrirTelaDois.classList.remove("escondido")
    fecharTelaUm.classList.add("escondido")
    fecharTelaTres.classList.add("escondido")
    adicionarTitulo();
}

// click no botão criar quizz e retira a classe escondida da tela 3 e 
// esconde a tela 
function criarQuiz() {
    let corpo = document.querySelector(".criar-quizzes")
    console.log(corpo)
    corpo.classList.remove("escondido")
    let telaUm = document.querySelector(".tela-um");
    telaUm.classList.add("escondido")
    let telaDois = document.querySelector(".tela-um")
    telaDois.classList.add("escondido")
}


function showTab(n) {
    // Para trocar cada aba
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // Botão prosseguir:
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // mostra onde em qual passo você está:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // Ela vai colocar qual aba tem que aparecer
    var x = document.getElementsByClassName("tab");
    // Se o input estiver vazio ela para de executar
    if (n == 1 && !validateForm()) return false;
    // Esconde a aba:
    x[currentTab].style.display = "none";
    // Aumenta o índice para trocar a aba:
    currentTab = currentTab + n;
    // Caso chegue no final do form :
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    // Valida os inputs para saber se está tudo certo
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    z = document.getElementsByClassName("url");

    // Loop que checa cada input das abas:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // adiciona classe invalid:
            y[i].className += " invalid";
            // e coloca o status de valid como false:
            valid = false;
        }
    }
    if (valid == false) {
        alert("Por favor insira os dados novamentes")
    }
    // Se valid for true então ele checa o progresso e passa para a próxima aba:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // retorna se valid é true ou false
}

function fixStepIndicator(n) {
    // Remove a classe "active" e adiciona para a aba que realmente está ativa
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}