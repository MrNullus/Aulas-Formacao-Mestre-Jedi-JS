/*
    new Date(); // Retorna um Object Date
    new Date(valor); // Valor inteiro em milissegundos com base no UTC;
    new Date(dataString); //  Date Time String Format - DDTHH:mm:ss
    new Date(ano, mês, dia, hora, minuto, milissegundo);
*/

var data = new Date();
console.log(typeof data);

var dataString = new Date("2021-10-25");
console.log(dataString);

console.log(dataString.getFullYear()); // Pega o ano;
console.log(dataString.getMonth()+1) // Pega o mês;
console.log(dataString.getDay()); // Pega o dia da semana;
console.log(dataString.getDate()); // Pega o dia;
console.log(dataString.getHours()); // Pega as horas;
console.log(dataString.getMinutes()); // Pega os minutos;
