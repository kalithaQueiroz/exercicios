// Faça um programa para calcular o valor de uma viajem.

// Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por Km;
// 3 - Distãncia em KM da viajem;

// Imprima no console o valor que será gasto para realizar esta viajem.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor do Combustível: ', (valorCombustivel) => {
  rl.question('Digite o gasto médio do Combustível: ', (gastoMedioCombustivel) => {
    rl.question('Digite a distância em KM da viajem: ', (distanciaViagem) => {

      // Converte as strings para números
      valorCombustivel = parseFloat(valorCombustivel);
      gastoMedioCombustivel = parseFloat(gastoMedioCombustivel);
      distanciaViagem = parseFloat(distanciaViagem);

      // Calcula o total
      const total = gastoMedioCombustivel * distanciaViagem * valorCombustivel;

      // Exibe o resultado
      console.log(`O valor total é: ${total}`);

      // Fecha a interface após todas as perguntas
      rl.close();
    });
  });
});