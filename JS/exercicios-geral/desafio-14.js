// Crie um programa que dado um número peça para o usuario digitar a mesma quantidade em numeros aleatórios e depois imprima o Maior numero par e o Menor numero impar.

const entradas = [5, 50, 10, 77, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print(maiorNumeroPar);
print(menorNumeroImpar);