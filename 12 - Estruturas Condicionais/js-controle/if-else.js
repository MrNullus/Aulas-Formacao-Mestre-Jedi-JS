// *** if-else  ***

var condicao = true;

// *----
if (condicao) console.log("0 - entrou no if");

// *----
if (condicao) {
    console.log("1 - entrou no if");
    console.log("2 - entrou no if");
}

// *----
if (condicao)
console.log("3 - entrou no if");
else
console.log("3 - entrou no else");

condicao = false;

// *----
if (condicao) {
    console.log("4 - entrou no if");
    console.log("4 - entrou no if");
} else {
    console.log("4 - entrou no else");
    console.log("4 - entrou no else");
}

// *----
var texto = "JS";


if (texto === "js") {
    console.log("A combinação é js!");
} else if (texto === "Js") {
    console.log("A combinação é Js!");
} else if (texto === "jS") {
   console.log("A combinação é jS!");
} else {
    console.log("Não foi encontrado a combinação!")
}

