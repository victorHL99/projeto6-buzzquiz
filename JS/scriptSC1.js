/*----- VARIÁVEIS GLOBAIS ----- */

//const nomeUsuario = prompt("Qual o seu nome de usuario")
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab


/*----- FUNÇÃO PARA OBTER QUIZZ DO SERVIDOR ----- */

function obterQuizz() {
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

// click no botão criar quizz e retira a classe escondida da tela 3 e 
// esconde a tela 
function criarQuiz() {
    let corpo = document.querySelector(".criar-quizzes")
    console.log(corpo)
    corpo.classList.remove("escondido")
    let telaUm = document.querySelector(".tela-um");
    telaUm.classList.add("escondido")
    let telaDois = document.querySelector(".tela-dois")
    telaDois.classList.add("escondido")
}  


function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    z = document.getElementsByClassName("url");

    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    if (valid == false) {
        alert("Por favor insira os dados novamentes")
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}
