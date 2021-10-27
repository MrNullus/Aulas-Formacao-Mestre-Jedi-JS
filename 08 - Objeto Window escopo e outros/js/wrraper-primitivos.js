// Wrraper
var valorString = "Curso JS Mestre Jedi";
// O metodo substr vai 'cortar' uma string e retornar essa sub string 
// .substr(começo, fim);
console.log(valorString.substr(0, 5));

// Processo Wrraper
var valorStringTemp = new String(valorString);
var substr = valorStringTemp.substr(0, 5);
valorStringTemp = null;
console.log(substr);
substr = null;
