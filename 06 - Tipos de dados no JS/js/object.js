// Forma literal - sendo mais convecional usa as chaves e já se insere seus atributos;
var itens = {};
var itens2 = {
    nome : "refrigerante",
    preco : 23,
    ativo : true,
    detalhes : {
        detalhe : "..."
    }
};

// Usando o Construtor - umaoutra forma usando a função construtora;
var pessoa = new Object();
pessoa.nome = "joão";
pessoa.idade = 44;

// Acessar propriedades - para isso é necesario usar o objeto, ponto final e o nome da propriedade que se quer instanciar;
console.log(itens2.nome);
console.log(itens2.preco);
console.log(itens2['ativo'])
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(itens2.detalhes.detalhe);
