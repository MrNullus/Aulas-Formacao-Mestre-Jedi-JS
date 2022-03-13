// !item 6
// *** Segunda Missão Estelar JS ***
// !item 7
/*
 *>> Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!!!!!!!!:)
 */

// !item 8
var missao = "Segunda Missão Estelar JS";

console.log(missao);
console.log("Tipo variavel missao: ", typeof missao);

// !item 9
var hiperEspaco = new String(
    "*>> Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!!!!!!!!:)"
);

console.log(hiperEspaco);
console.log("Tipo variavel hiperEspaco: ", typeof hiperEspaco);

// !item 10
var nomeCliente = "Salatiel";
var renda = 12.2222;
var dataNascimento = new Date("2999-02-01");
var ativo = true;

function exibirDadosClienteVariaveis(nome, renda, dataNasc, ativo) {
    console.log("----- Dados Clientes -------")
    console.log("Nome |> ", nome);
    console.log("Data de Nascimento |> ", dataNasc);
    console.log("Renda |> R$", renda);
    var isAtivo = ativo == true ? "Sim" : "Não";
    console.log("Ativo: ", isAtivo);
    console.log("------------ ##### ---------")
}

exibirDadosClienteVariaveis(nomeCliente, renda, dataNascimento, ativo);

// !item 11
var clienteArray = [
    ['Nome', 'Lortus'],
    ["Renda R$", 1222.22],
    ['Data de Nascimento', new Date("1999-02-01")],
    ["Ativo: ", true]
];

function exibirDadosClienteArray() {
    for (var array of clienteArray) {
        if (array[0] == "Ativo: ") {
            var isAtivo = (ativo == true) ? "Sim" : "Não";
            console.log(array[0], isAtivo);
        } else {
            console.log(array[0], array[1]);
        }
    }
}

exibirDadosClienteArray()

// !item 12
var clienteObject = {
    nomeCliente: "Salatiel",
    renda: 15.000002,
    dataNascimento: new Date("2999-02-01"),
    ativo: true
};

// *** for...in, switch, if-else
function exibirDadosClienteObj() {
    for (var item in clienteObject) {
        switch (item) {
            case "nomeCliente":
                console.log("Nome |> ", clienteObject[item]);
                break;

            case "renda":
                console.log("Renda R$ |> ", clienteObject[item].toString().replace(".", ","));
                break;

            case "dataNascimento":
                console.log("Data de Nascimento |> ", clienteObject[item]);
                break;

            case "ativo":
                var isAtivo = (clienteObject[item] == true) ? "Sim" : "Não";
                console.log("Ativo |> ", isAtivo);
                break;

            default:
                break;
        }
    }
}

exibirDadosClienteObj();


// !item 13
function retornDataAtualFormatada() {
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1;
    var ano = dataAtual.getFullYear();
    var dataFormatada = "";

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada += dia.toString();
    }

    if (mes.toString().length == 1) {
        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    return dataFormatada;
}

console.log("Data atual é ", retornDataAtualFormatada());

// !item 14
var hiperEspacoRegExp = new RegExp(/Estelar/);
var textMissao = "Apertem os cintos para adentrarmos ao hiper-espaço rumo a uma nova Missão Estelar JS!!!!!!!!:)";

console.log("Teste: ", hiperEspacoRegExp.test(textMissao));
console.log("Pesquisa: ", hiperEspacoRegExp.exec(textMissao));

// !item 15
try {

    for (var i = 30, c = 0; i >= 0; i--, c++) {
        cosole.log(i, " - " + c);

        if (c == 29) {
            throw new Error("Ocorreu um erro de iteração: ", c);
        }
    }

} catch (error) {
    console.log(error.nome);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("chegou no bloco finally, sempre será executado.");
}


// !item 16
function recebeDadosFormBoot(objFormElementos) {
    console.log("Tipo:", Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    for (const key in objDadosForm) {
        console.log(objDadosForm[key]);
    }

    preencherFormHtml(objDadosForm);
}

function preencherFormHtml(objDados) {
    var form = document.getElementById("formHtml");
    form.nomeHtml.value = objDados.nomeBoot;
    form.emailHtml.value = objDados.emailBoot;
    form.emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
    form.formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioBoot;
    form.formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioBoot;
    form.estadoSelectHtml.value = objDados.estadoSelectBoot;
}