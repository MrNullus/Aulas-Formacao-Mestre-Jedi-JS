var cliente = "Pedroca";
console.log(window.cliente);
var msgVenda = "Olá" + cliente;
console.log(msgVenda, " - ESCOPO GLOBAL");

//* Como tem a precedencia, o interpretador JS exclui o que vem antes do escopo global e usa o valor do local;
function realizarVenda(item, valor){
    //* No JS daria para acessar está variavel do mesmo jeito pois o interpretador JS assume que ela ainda existe porque não tem a palavra "var", não use isso;
    // msgVenda = "Venda realizada com sucesso !!";
    var msgVenda = "Venda realizada com sucesso !!";
    console.log(msgVenda, " - ESCOPO LOCAL");
    console.log("Cliente: ", cliente);
    console.log("Item: ", item);
    console.log("Valor: ", valor);

    function total(){
        var msgVenda = "Total da venda : 20.90";
        console.log(msgVenda, " - ESCOPO FUNCTION INTERNA");
    }

    total();
}

realizarVenda("Arroz", 20.90);
//* Como msgVenda é do escopo do realizarVenda() um escopo local ela só existe ali e na execução do escopo;
//* Logo ela não pode ser acessada fora da função msgVenda;
// console.log(msgVenda);
//* Parametros são de escopos loais logo também não  podem ser acessadas no escopo global;
// console.log(item);