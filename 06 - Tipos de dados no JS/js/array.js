// Literal - colchetes  e seus valores (ou não);
var produtos = [];
var produtos2 = [
    'Produto A', 'Produto B',
    'Produto C', 'Produto D'
];

var valores = [
    'Fidemon', 'Ze Ruela', 'Francielly S2', 
    23, true, false, {dev : "Gustavo"}
] ;

// Usando construtor - função construtora new Array();
var array = new Array();
var array2 = new Array('A', 'Maria', {nome : "Juvenalia"}, true, 12);

// Acessar
console.log(valores[0]);
console.log(array2[2].dev);
console.log(array);
console.log(valores[2]);
console.log(array2[1]);
console.log(array2[2].nome);
