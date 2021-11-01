var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampos(){
    console.log("typeof" + typeof nomeBootInputText);
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText));
    // alert(nomeBootInputText);
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    nomeBootInputText.disabled = true; // Desabilita o campo
    nomeBootInputText.readOnly = true;// Habilita para leitura
    console.log("tagNmae: " + nomeBootInputText.tagName);// Pega o nome da tag
    console.log("tagNmae: " + nomeBootInputText.tagName.type);// Pega o tipo da tag
    console.log("disabled: nomeBootInputText.disabled = true;");
}

function
