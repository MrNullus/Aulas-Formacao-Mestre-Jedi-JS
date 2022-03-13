do {

    if (comissao >= meta) {
        console.log("Valor da comssão: R$ ", ++comissao);

        if (comissao == 20) break;
    } else {
        console.log("Valor da comissão: R$ ", comissao += 2);
        break;
    }

} while (comissao < realizado);