// Elabore um algoritmo que dado peso e altura de um adulto mostre sua condição de acordo com a tabea abaixo.

// 1 - Abaixo de 18.5 (Abaixo do peso);
// 2 - De 18.5 até 25 (Peso normal);
// 3 - De 25 até 30 (Acima do peso);
// 4 - De 30 até 40 (Obeso);
// 5 - Acima de 40 (Obesidade Grave);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});    

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return `Abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 25) {
        return `no Peso normal`;
    } else if (imc >= 25 && imc <= 30) {
        return `Acima do peso`;
    } else if (imc >= 30 && imc <= 40) {
        return `Obesa`;
    } else {
        return `com Obesidade Grave`;
    }    
}    

function main(peso, altura) {
    const imc = calcularImc(peso, altura).toFixed(2);
    console.log(`A IMC é ${imc}Kg, e essa pessoa está ${classificarImc(imc)}.`);
}

rl.question('Digite o peso: ', (peso) => {
    rl.question('Digite a altura: ', (altura) => {
        main(parseFloat(peso), parseFloat(altura));
        rl.close();
    });
});