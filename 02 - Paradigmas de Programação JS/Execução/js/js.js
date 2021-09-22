// declaração de variáveis 

var nome = "Gustavo";
var sobreNome = "Henrique";

console.log("Instrução solta em um arquivo JS");

// declaração de função
function exibirNomeConsole(){
    console.log("Exibir nome : " + nome);
}

function exibirNomeCompleto(){
    console.log(" Padawan : " + nome +  " " + sobreNome);
}

function eventoClick(){
    alert("Você clicouemum botão!");
}

// chamadas de função
exibirNomeConsole();