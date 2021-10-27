//Mostra que o tipo do window é objec(objeto);
console.log(typeof window);

//Mostra que o document é um object(objeto);
console.log(typeof window.document);

//Exibe que Window é uma function - Window é uma função construtora;
console.log(typeof window.Window);

//Executa um teste se Window é uma instancia de window;
//Se a instancia for verdadeira retorna true, senão false;
console.log(window instanceof Window);

//Recurso globais do window:
console.log(window.undefined);
console.log(window.NaN);
console.log(window.Infinity);
console.log(window.console.log("Testeee !"));
console.log(window.console.timeLog());

//this serve para se referir ao objeto do escopo aonde está colocado;
this.console.log("como o escopo é global logo se refere ao window");

function concatena(fragmentText1, fragmentText2){
    var frase = fragmentText1 + fragmentText2;
    return frase;
}

var fraseConcatenada = concatena('Agora this', ' pertence a outro escopo');

console.log(fraseConcatenada);

// Como window é global pode acesssar tudo dentro do JS e assim como ele acessa tudo no window;
// Por isso consegue acessar a function soma;
console.log( 
    function soma(number1, number2){ 
        return number1 + number2; 
    }
);

console.log(window.soma);

var Pessoa = {
    "nome":"Gustavo",
    "Stack":"JS"
}

console.log(window.Pessoa);
console.log(window.Pessoa.nome);
console.log(this.Pessoa.stack);
