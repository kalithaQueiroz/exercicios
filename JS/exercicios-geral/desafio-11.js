// Crie um programa que percorra uma lista de números e imprima cada numero par.

const numeros = [7, 12, 24];
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0) {
        console.log(numero);
    }
}

// const listaDeValores = [1, 2, 3, 4, 5];
// const valor = listaDeValores[2];
// console.log(valor);

// const numerosPares = [];
// for (let i = 0; i < 10; i = i + 2) {
//     numerosPares.push(i);
// }
// console.log(numerosPares);

// const numerosPares = [];
// for (let i = 0; i < 10; i++) {
//     const numeroPar = i % 2 === 0;
//     if (numeroPar) {
//         numerosPares.push(i);
//     }
// }
// console.log(numerosPares)