// Faça um algoritimo que dado 3 notas calcule e imprima a média e a classificação.

// Classificação:
// 1 - Menor que 5 (Reprovado).
// 2 - Entre 5 e 7 (Recuperação).
// 3 - Acima de 7 (Aprovado).

const entradas = [23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

const media = gets();

if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}