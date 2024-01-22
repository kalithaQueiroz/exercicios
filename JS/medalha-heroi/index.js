// Classificador de nível de herói.
// Foram criadas variáveis para armazenar nome, xp e possivel medalha de um herói e depois utilizada uma estrutura de decisão para apresentar a medalha com base no xp do herói.
// Foi utilizado: Variáveis, Operadores, Laços de repetição e Estruturas de decisões.

let name = prompt("Digite o nome do heroi: ")
let xp = prompt("Digite o XP do heroi: ")
let medal = " "

if (xp <= 1000) {
	medal = "Ferro"
} else if ((xp >= 1001) && (xp <= 2000)) {
	medal = "Bronze"
} else if ((xp >= 2001) && (xp <= 3000)) {
	medal = "Prata"
} else if ((xp >= 3001) && (xp <= 4000)) {
	medal = "Ouro"
} else if ((xp >= 4001) && (xp <= 5000)) {
	medal = "Platina"
} else if ((xp >= 5001) && (xp <= 6000)) {
	medal = "Ascendente"
} else if ((xp >= 6001) && (xp <= 7000)) {
	medal = "Imortal"
} else {
	medal = "Radiante"
}
console.log(`O herói de nome ${name} tem ${xp} de experiência e recebeu a medalha de ${medal}`)