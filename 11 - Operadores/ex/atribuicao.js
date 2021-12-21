//* Operador =
var numero = 10;
var numero2 = 1;
var nome = 'Pedro';
var verdadeiro = true;

numero = numero = numero2;
// console.log(numero);

//* Operador +=

var numero3 = 10;
// numero3 = numero3 + 1;
// numero3++;
// numero3 += 1;
numero3 += numero2;

//$ se for usado com stings vai concatenar
/* console.log(numero3);
nome += ' Silva';
console.log('Nome completo: ', nome);
nome += true;
console.log('Nome completo: ', nome);
 */

//* Operador -=
var sub = 2;
sub -= 2;
console.log("sub -= 20 ", sub);

//* Operador *=
var mult = 2;
mult *= 2;
console.log("mult *= 2 ", mult);

//* Operador /=
var div = 2;
div /= 12;
console.log("div /= 2 ", div);

//* Operador %=
var resto = 2;
resto %= 4;
console.log("mult %= 2 ", resto);

//* Operador **= | ES7
var exp = 3;
exp **= 12;
console.log("mult *= 2 ", exp);


