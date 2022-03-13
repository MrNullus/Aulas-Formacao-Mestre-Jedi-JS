//*---*** for..in
// vai servir por exemplo para acessar chaves de objetos;
console.log("//*---*** for..if");
var objCliente = {
    nome: "GusTa",
    idade: 35,
    dataNasc: new Date("1990-03-01")
};

//* sintaxe basica 
//* for-in iterando com objetos
for (var key in objCliente) {
    // ? vai retornar o nome das keys
    console.log("chave:",key);
}
console.log("#--------------#");
for (var key in objCliente) {
    // ? vai retornar o valor das keys - usando aquela dotação de array
    console.log("chave:",key," |> valor:",objCliente[key]);
}

console.log("#-------##-------#");

var arrayQualquer = ['a', 'b', 'c', 'd', 1, 2, 3];

for (var index in arrayQualquer) {
    // ? vai retornar o index do elemento do array
    console.log("index:",index);
}
console.log("#--------------#");
for (var index in arrayQualquer) {
    // ? vai retornar o valor do index
    console.log("index:",index," |> valor:",arrayQualquer[index]);
}


console.log("//*---*** for..of");
//* só vai funcionar em elementos iteraveis e retorna o valor deles;
//? No script abaixo dará erros, pois objCliente não é iteravel, porque ele é um objeto;
//! for (var key of objCliente) {
//!     console.log("chave:",key);
//! } 

console.log("#--------------#");

for (var valor of arrayQualquer) {
    // * vai retornar apenas o valor dos elementos do array;
    console.log("valor:",valor);
}


