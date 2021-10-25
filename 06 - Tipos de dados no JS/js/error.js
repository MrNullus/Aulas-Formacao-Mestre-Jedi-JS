console.log("Linha 1");
// throw new Error("Ocorreu um erro na aplicação!");
console.log("Linha 3");

try{
    // Esse bloco vai testar
    console.log(soma(10, new Array(10)));
}catch (error){
    // Esse bloco será executado quando der error
    //console.log(error);
    console.log(error.name); //Retorna o nome do error
    console.log(error.message); //Retorna a mensagem do error
    console.log(error.stack); //Retorna os arquivos e modulos que deu pau
}finally{
    // Esse bloco vai executar sempre, mesmo que der error ou não
    console.log("Esse bloco sempre será executado");
}

function soma(a, b){
    // return a + b;
    // return a / b;
    // return a[2];
    return a.exec();
}
