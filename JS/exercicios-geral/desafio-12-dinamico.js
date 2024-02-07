// Dinamizando o código.

const { gets, print } = require('./desafio-12-functions');

const quantidade = gets();
let maiorValor = 0;

for (let i = 0; i < quantidade; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);