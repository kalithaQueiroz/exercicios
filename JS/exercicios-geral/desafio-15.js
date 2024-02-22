// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo siga as seguites regras:
// Aliguotas: (0.00 a 1100.00 > 5%), (1100.01 a 2500.00 > 10%), (Maior que 2500.00 > 15%).

// Receba o valor bruto e o adicional.
// Desconte o percentual de imposto conforme faixa salarial.
// Some com resultado com os beneficios.

const entradas = [5500, 250];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const valorSalario = gets();
const valorBeneficio = gets();

function calculoImposto(valor, percentual) {
    return valor * (percentual / 100)
}

function percentualSalario(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }else if (salario >= 1100.01 && salario <= 2500){
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

const valorImposto = percentualSalario(valorSalario);
const valorFinal = valorSalario - valorImposto + valorBeneficio;

print(valorFinal.toFixed(2));