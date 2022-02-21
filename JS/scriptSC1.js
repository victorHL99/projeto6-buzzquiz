/*----- VARIÁVEIS GLOBAIS ----- */

//const nomeUsuario = prompt("Qual o seu nome de usuario")
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
const promiseQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');


/*----- FUNÇÃO PARA OBTER QUIZZ DO SERVIDOR ----- */

function obterQuizz() {
    const promiseQuizz = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promiseQuizz.then(telaCarregar)
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
    let teste = resposta.data[i]
    let banner = document.querySelector(".topo-quizz")

    
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
        
    }
    
    console.log(teste)
    
    banner.innerHTML += `
    <img src=${teste.image} alt="">
    <div class="titulo-quizz-banner">${teste.title}</div>
    
    `

    

}



/* Função para mostrar a tela dois quando clicar no quizz */
function abrirTelaDois() {
    let fecharTelaUm = document.querySelector(".tela-um")
    let abrirTelaDois = document.querySelector(".tela-dois")
    let fecharTelaTres = document.querySelector(".tela-tres")


    abrirTelaDois.classList.remove("escondido")
    fecharTelaUm.classList.add("escondido")
    fecharTelaTres.classList.add("escondido")

    
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
    let x, y, i, titulo, quantidadePergunta, url, url2, url3, url4, url5,url6, corFundo, textopergunta2, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    url = String(document.getElementById("url1").value);
    url2 = String(document.getElementById("url2").value);
    url3 = String(document.getElementById("url3").value);
    url4 = String(document.getElementById("url4").value);
    url5 = String(document.getElementById("url5").value);
    url6 = String(document.getElementById("url6").value);
    titulo = String(document.getElementById("titulo-pergunta").value).length;
    corFundo = String(document.getElementById("cor-de-fundo").value);
    quantidadePergunta = parseInt(document.getElementById("quantidade-perguntas").value)
    quantidadeNivel = parseInt(document.getElementById("quantidade-nivel").value)
    textopergunta2 = String(document.getElementById("texto-pergunta2").value).length
    tituloNivel = String(document.getElementById("titulo-nivel").value).length
    porcentagem = String(document.getElementById("porcentagem").value)
    textoGrande= String(document.getElementById("textoGrande").value).length;
    let colorCheck = corFundo.includes("#")
    let urlCheck = url.includes("https://")
    let urlCheck2 = url2.includes("https://")
    let urlCheck3 = url3.includes("https://")
    let urlCheck4 = url4.includes("https://")
    let urlCheck5 = url5.includes("https://")
    let urlCheck6 = url6.includes("https://")

    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "" && currentTab == 0) {
            // adiciona classe invalid:
            y[i].className += " invalid";
            // e coloca o status de valid como false:
            valid = false;
        }
        else{
            valid = true
        }
    }
    if (currentTab == 0 && titulo < 20) {
        valid = false
    }
    if (currentTab == 0 && titulo > 65) {
        valid = false
    }
    if (currentTab == 0 && urlCheck == false) {
        valid = false
    }
    if (currentTab == 1 && quantidadePergunta < 3) {
        valid = false
    }
    if (currentTab == 1 && quantidadeNivel < 2) {
        valid = false
    }
    if (currentTab == 1 && typeof quantidadeNivel !== 'number') {
        valid = false
    }
    if (currentTab == 1 && typeof quantidadePergunta !== 'number') {
        valid = false
    }
    if (currentTab == 1 && textopergunta2 < 20) {
        valid = false
    }
    if (currentTab == 1 && colorCheck == false) {
        valid = false
    }
    if (currentTab == 1 && parseInt(corFundo.length) < 7) {
        valid = false
    }
    if (currentTab == 1 && corFundo.indexOf('FFFFFF') > -1 == false) {
        valid = false
    }
    if (currentTab == 1 && urlCheck2 == false) {
        valid = false
    }
    if (currentTab == 1 && urlCheck3 == false) {
        valid = false
    }
    if (currentTab == 1 && urlCheck4 == false) {
        valid = false
    }
    if (currentTab == 1 && urlCheck5 == false) {
        valid = false
    }
    if(currentTab == 3 && tituloNivel < 10){
        valid = false
    }
    if(currentTab == 3 && porcentagem < 0){
        valid = false
    }
    if(currentTab == 3 && porcentagem > 100){
        valid = false
    }
    if (currentTab == 3 && urlCheck6 == false) {
        valid = false
    }
    if(currentTab == 3 && textoGrande < 30){
        valid = false
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

var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function telaCarregar(resposta){
    var x = document.getElementsByClassName("loader");
    x.style.display = "block"
    mostrarQuizzes(resposta)
}