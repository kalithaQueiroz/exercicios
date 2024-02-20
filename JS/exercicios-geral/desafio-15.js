// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo siga as seguites regras:
// Aliguotas: (0.00 a 1100.00 > 5%), (1100.01 a 2500.00 > 10%), (Maior que 2500.00 > 15%).

// Receba o valor bruto e o adicional.
// Desconte o percentual de imposto conforme faixa salarial.
// Some com resultado com os beneficios.

const entradas = [2000, 250];
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
    if (salario >= 0 && salario <= 1100){
        return 5;
    }else if (salario >= 1100.01 && salario <= 2500){
        return 10;
    } else {
        return 15;
    }
}

const aliquitaSalario = percentualSalario(valorSalario);
const valorImposto = calculoImposto(valorSalario,aliquitaSalario);
const valorFinal = valorSalario - valorImposto + valorBeneficio;

print(valorFinal);