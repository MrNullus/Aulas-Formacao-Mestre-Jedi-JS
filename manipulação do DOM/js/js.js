//* Usando o getElementById() - consegue pegar um elemento pelo seu id;

var nomeBootInputText = document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampos(){
    console.log("typeof" + typeof nomeBootInputText);
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText));
    // alert(nomeBootInputText);
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    nomeBootInputText.disabled = true; // Desabilita o campo
    nomeBootInputText.readOnly = true;// Habilita para leitura
    console.log("tagNmae: " + nomeBootInputText.tagName);// Pega o nome da tag
    console.log("tagType: " + nomeBootInputText.tagName.type);// Pega o tipo da tag
    console.log("disabled: nomeBootInputText.disabled = true;");
}

function selecionarCamposSelect(){
    console.log("object call: " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value " + estadoSelect.value); // Pega o valor
    estadoSelect.selectedIndex; // Retorna o indice da option selecionada
    estadoSelect.selectedIndex = 0; // Coloca o indice como 0 do option selecionado
    console.log("tagNmae: " + estadoSelect.tagName);// Pega o nome da tag
    console.log("tagType: " + estadoSelect.tagName.type);// Pega o tipo da tag
    console.log(estadoSelect.options) // Retorna uma colection(um array) das options e mais;
    console.log(estadoSelect.selectedOptions.item(0)) // Com isso se pode pegar o item do select ou seja o option selecionado
    console.log(estadoSelect.selectedOptions.item(0).value) // Vai pegar o primeiro(indice 0) item selecionado
}

// Vai servir para selecionar um seletor no CSS - quando existir mais de um elemento na query vai ser pego a primeira;
// Podendo usar seletores CSS;
var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");

function selecionarCampoEmailCheck(){
  console.log("object call tipo: " object.prototype.toString.call(emailPromocionalCheck));
  console.log("tagNmae: " + emailPromocionalCheck.tagName);
  console.log("tagType: " + emailPromocionalCheck.tagName.type);
  console.log("value: " + emailPromocionalCheck.tagName.value);
  console.log("checked(marcado): " + emailPromocionalCheck.tagName.checked);
}

var formContatoRadio = document.querySelector("[formContatoRadioBoot]");

function selecionarCampoRadio(){
  console.log("object call tipo: " object.prototype.toString.call(formContatoRadio));
  console.log("tagNmae: " + formContatoRadio.tagName);
  console.log("tagType: " + formContatoRadio.tagName.type);
  console.log("value: " + formContatoRadio.tagName.value);
  console.log("checked(marcado): " + formContatoRadio.tagName.checked);
}

// Vai pegar todos os elementos com o nome colocado no getElementsByName
// Os seletores ->  getElementsByName, getElementsByClassName e getElementsByClass - funcionam de forma dinamica com referencia a arvore do DOM
var radios = document.getElementsByName("formContatoRadioBoot");

// Vai selecionar os elementos pelo nome das classes, em um 'array' - um HTMLCollection
var drop-dowsItems = document.getElementsByClassName('dropdown-item');

// Seleciona os elementos pela tag
var selects = document.getElmentsByTagName("select");

// querySelectorAll vai selecionar mais elementos - criando uma lista de elementos
var elementos = document.querySelectorAll("input[type=text]");

var formulario = document.querySelector("#formBoot");
console.log(formulario);

function exibirDados(elemento){
  console.log(elemento);
}

// Cria um novo elemento especifico
var paragrafo = document.createElement('p');
console.log(paragrafo);
// Cria um texto
var texto = document.createTextNode('Hello World :)');
console.log(texto);
// Adiciona 'texto' como um filho de paragrafo
paragrafo.appendChild(texto);
console.log(paragrafo);
// Adiciona esse elemento no (no final) body
document.body.appendChild(paragrafo);

// vai pegar o elemento filho
var formFIlhoNome = document.getElementById('nomeBoot');
console.log(formFilhoNome);
// vai pegar o elemento pai como referencia
var formPai - formFIlhoNome.parentNode;
// vai inserir antes do elemento pai o 'paragrafo', tomando o 'formPai' como referencia
formPai.insertBefore(paragrafo, formFIlhoNome);

// vai substituir um elemento filho
formPai.replaceChild(paragrafo, formFIlhoNome);
// Vai remover uma filha de um elemento
formPai.removeChild(paragrafo);
// Vai adicionar um novo texto no elemento
paragrafo.innerText = "Hello World, Fucking Beach!!";
