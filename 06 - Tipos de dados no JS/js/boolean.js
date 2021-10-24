var contaStatus = false;
console.log("Status da conta: ", contaStatus);

var contaStatus = true;
console.log("Status da conta: ", contaStatus);

// Todo valor todo objeto no JavaScript pode se transformar em um valor logico
console.log(typeof contaStatus);

if(contaStatus == true){//true
    console.log("Enviar email!");
}else{//false
    console.log("Ative sua conta!");
}

console.log(!!contaStatus);

var nome = "Gustavito";
var preco = 22.8;
var vazio = " ";

console.log(!!nome);
console.log(!!preco);
console.log(!!vazio);

// Esses 6 valores/ objetos são false
console.log(!!"");
console.log(!!0);
console.log(!!-0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log("-------------");
console.log(!!Array);
console.log(!!Object);
console.log(!!Function);


