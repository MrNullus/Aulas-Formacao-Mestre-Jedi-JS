//* Conversão  automatica
console.log(23 + 'trinta e cinco');
console.log(55 + '5');
console.log(10 / "2");
console.log("3" * "2");
console.log("3" / {valor:5});

//* Conversão de forma explícita por construtor
//  Construtor(object);
console.log(Number("23"));
console.log(typeof Number("23"));

var arrayDeTipos = [
    "Maria", "", "5.6", 1, 0, -0, 
    -1, 10, 10.5, true, false, 
    null, undefined, Infinity,
    [], [1, 2, "C#"], function(){return 10;}
];

converteTipo(arrayDeTipos);

function converteTipo(tipos){
    try {
        for(let index = 0; index < tipos.length; index++){
            const tipo = tipos[index];
            console.log("###>>> Valor: ", tipo, " -> Tipo dado: ", typeof tipo);
            console.log("###>>> Para String: ", String(tipo), " -> Tipo dado: ", typeof String(tipo));
            console.log("###>>> Para Number: ", Number(tipo), " -> Tipo dado: ", typeof Number(tipo));
            console.log("###>>> Para Boolean: ", Boolean(tipo), " -> Tipo dado: ", typeof Boolean(tipo));
            console.log("###>>> Para Object: ", Object(tipo), " -> Tipo dado: ", typeof Object(tipo));
            console.log("\n");
        }
    } catch (error) {
        console.log("Ocorreu um error! :)");
        console.log(error.name);
        console.log(error.mesage);
        console.log(error.stack);
    }
}

// a song for you