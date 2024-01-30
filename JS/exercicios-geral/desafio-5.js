// Calcule o que deve ser pago por um produto considerando a condição de pagamento.

// À vista Débito (10% de desconto);
// À vista Dinheiro ou Pix (15% de desconto);
// Parcelado 2x (Preço normal sem juros);
// Parcelado Nx (Preço normal e 10% de juros);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor do produto: ', (valorProduto) => {
    rl.question('Escolha o tipo de pagamento digitando: (1 para Débito, 2 para Dinheiro ou Pix, 3 para Parcelado 2x e 4 para Parcelar acima de 3x): ', (formaPagamento) => {

        valorProduto = parseInt(valorProduto)

        if (formaPagamento === '1') {
            valorProduto = valorProduto - (valorProduto * 0.10);
        } else if (formaPagamento === '2') {
            valorProduto = valorProduto - (valorProduto * 0.15);
        } else if (formaPagamento === '3') {
            valorProduto = valorProduto
        } else if (formaPagamento === '4') {
            valorProduto = valorProduto + (valorProduto * 0.10);
        } else {
            console.log('Tipo de pagamento inválido. Programa encerrado.');
            rl.close();
        }

        console.log(`O valor total do produto é: ${valorProduto}`);

        rl.close();
    });
});