// Faça um algoritimo que dado 3 notas calcule e imprima a média e a classificação.

// Classificação:
// 1 - Menor que 5 (Reprovado).
// 2 - Entre 5 e 7 (Recuperação).
// 3 - Acima de 7 (Aprovado).

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a primeira nota: ', (nota1) => {
    rl.question('Digite a segunda nota: ', (nota2) => {
        rl.question('Digite a terceira nota: ', (nota3) => {

            nota1 = parseInt(nota1);
            nota2 = parseInt(nota2);
            nota3 = parseInt(nota3);

            const media = ((nota1 + nota2 + nota3) /3);

            console.log(`A média é: ${media}`);

            rl.close();
        });
    });
});