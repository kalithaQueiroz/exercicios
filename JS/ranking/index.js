// Classificador de Ranking.
// Foram criadas variáveis para armazenar nome, vitórias e derrotas de um herói com esses dados criamos uma função para calcular a quantidade de derrotas e abater das vitórias e depois uma estrutura de decisão para apresentar o ranking do Herói.
// Foi utilizado: Variáveis, Operadores, Laços de repetição, Estruturas de decisões, Funções.

let name = prompt("Digite o nome do heroi: ")
let victories = prompt("Digite o número de vitórias: ")
let defeats = prompt("Digite o número de derrotas: ")

victories = parseInt(victories);
defeats = parseInt(defeats);

console.log(`O herói de nome ${name} tem ${victories} vitórias, ${defeats} derrotas, e está no nível ${ranking(victories)}`);
console.log(`A diferença entre vitórias e derrotas é: ${calc(victories, defeats)}`);

function ranking(victories) {
    if (victories < 10) {
        return "Ferro"
    } else if ((victories >= 11) && (victories <= 20)) {
        return "Bronze"
    } else if ((victories >= 21) && (victories <= 30)) {
        return "Prata"
    } else if ((victories >= 31) && (victories <= 40)) {
        return "Ouro"
    } else if ((victories >= 41) && (victories <= 50)) {
        return "Platina"
    } else if ((victories >= 51) && (victories <= 60)) {
        return "Ascendente"
    } else if ((victories >= 61) && (victories <= 70)) {
        return "Imortal"
    } else {
        return "Radiante"
    }
}

function calc(victories,defeats){
    return victories - defeats;
}
let res = calc