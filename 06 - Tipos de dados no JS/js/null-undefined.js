// undefined e null não possuem métodos
// Não se usa o Undefined
// Só se usa o null para deixar uma variavel por exemplo nula
var nome;    
console.log(nome);
nome = "Gustavito"; 
console.log(nome);
 
nome = undefined; // já mais usar saporra
nome = null; // liberar espaço em memória

console.log("undefined == null", undefined == null);
console.log("undefined", typeof undefined);
console.log("null", typeof null);
console.log("undefined === null", undefined === null);
