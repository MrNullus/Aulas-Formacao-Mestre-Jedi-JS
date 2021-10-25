// Declaração de forma literal - Para fazer isso use duas barras mais o conteudo </conteudo/>
var regexpLiteral = /JS/;

// Declaração com construtor - use a função construtora new RegExp()
var regexpConstrutor = new RegExp("Jedi");

var stringCurso = "Formação Completa JavaScript Mestre - JS Jedi";

//Faz um teste com a string e a RegExp
console.log(regexpLiteral.test(stringCurso));

//Vai fazer uma pesquisar e pegando a primeira correspondencia que encontrar
console.log(regexpConstrutor.exe(stringCurso));

