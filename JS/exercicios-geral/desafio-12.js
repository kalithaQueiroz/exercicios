// Faça um programa que receba 5 numeros sorteados de 1 a 100 e mostre o maior número sorteado.
// Dados de entrada: (5, 50, 10, 95, 23).
// Dados de saída: (98).

const { gets, print } = require('./desafio-12-functions');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);