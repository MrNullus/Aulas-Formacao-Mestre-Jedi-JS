//*** escrever de 0 - 10
for (var contador = 0; contador < 11; contador++) { //* variaveis do bloco do for
    console.log(contador);
}

//* com array
var arrayNomes = [
    "Gustavo", "Francielly",
    "Karina", "Katrina"
];

for (var i = 0; i < arrayNomes.length; i++) {
    console.log(arrayNomes[i]);
}

//* sem o parametro dentro do "for" -> varivel de controle
var i = 0;

for (; i < 3; i++) {
    console.log(i);
}

//* somente com o parametro de controle
for (;;i++) {
    //* O "continue" vai servir para parar a iteração atual e voltar a iterar;
    if (i == 2 || i == 7) continue; 

    if(i == 10) break;
}
