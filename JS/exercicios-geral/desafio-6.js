// Calcule o que deve ser pago por um produto considerando a condição de pagamento.

// À vista Débito (10% de desconto);
// À vista Dinheiro ou Pix (15% de desconto);
// Parcelado 2x (Preço normal sem juros);
// Parcelado Nx (Preço normal e 10% de juros);

// Faça o exercício usando funções

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

rl.question('Digite o valor do produto: ', (valorProduto) => {
    rl.question('Escolha o tipo de pagamento digitando:\n1 para Débito;\n2 para Dinheiro ou Pix;\n3 para Parcelado 2x;\n4 para Parcelar acima de 3x. ', (formaPagamento) => {

        valorProduto = parseInt(valorProduto);

        let valorFinal;

        if (formaPagamento === '1') {
            valorFinal = aplicarDesconto(valorProduto, 10);
        } else if (formaPagamento === '2') {
            valorFinal = aplicarDesconto(valorProduto, 15);
        } else if (formaPagamento === '3') {
            valorFinal = valorProduto;
        } else if (formaPagamento === '4') {
            valorFinal = aplicarJuros(valorProduto, 10);
        } else {
            console.log('Tipo de pagamento inválido. Programa encerrado.');
        }

        console.log(`O valor total do produto é: ${valorFinal}`);

        rl.close();
    });
});
