// Faça um programa para calcular o valor de uma viajem.

// Você terá 6 variáveis. Sendo elas:
// 1 - Preço do Etanol;
// 2 - Preço da Gasolina;
// 3 - Preço da Disel;
// 4 - Tipo de combustível que está no carro;
// 5 - Gasto médio de combustível do carro por Km;
// 6 - Distãncia em KM da viajem;

// Imprima no console o valor que será gasto para realizar esta viajem.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha o tipo de combustível digitando 1 para Etanol, 2 para Gasolina e 3 para Disel: ', (tipoCombustivel) => {
  // Converte a escolha para minúsculas para facilitar a comparação
  tipoCombustivel = tipoCombustivel;

  // Inicializa a variável valorCombustivel
  let valorCombustivel;

  // Pergunta ao usuário o valor do combustível com base na escolha
  if (tipoCombustivel === '1') {
    rl.question('Digite o valor do Etanol: ', (valorEtanol) => {
      valorCombustivel = parseFloat(valorEtanol);

      calcularTotal();
    });
  } else if (tipoCombustivel === '2') {
    rl.question('Digite o valor da Gasolina: ', (valorGasolina) => {
      valorCombustivel = parseFloat(valorGasolina);

      calcularTotal();
    });
  } else if (tipoCombustivel === '3') {
    rl.question('Digite o valor da Disel: ', (valorDisel) => {
      valorCombustivel = parseFloat(valorDisel);

      calcularTotal();
    });
  } else {
    // Fecha a interface se o tipo de combustível for inválido
    console.log('Tipo de combustível inválido. Programa encerrado.');
    rl.close();
  }

  // Função para calcular o total e exibir o resultado
  function calcularTotal() {
    rl.question('Digite o gasto médio do Combustível: ', (gastoMedioCombustivel) => {
      rl.question('Digite a distância em KM da viagem: ', (distanciaViagem) => {
        // Converte as strings para números
        gastoMedioCombustivel = parseFloat(gastoMedioCombustivel);
        distanciaViagem = parseFloat(distanciaViagem);

        // Calcula o total e arredonda para duas casas decimais
        const total = ((distanciaViagem / gastoMedioCombustivel) * valorCombustivel).toFixed(2);

        // Exibe o resultado
        console.log(`O valor total da viajem é: ${total}`);

        // Fecha a interface após todas as perguntas
        rl.close();
      });
    });
  }
});
