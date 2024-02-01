// Crie uma classe para representar carros

// Os carros possuem uma marca, uma cor e um gasto médio de cobustível por quilometro rodado.
// Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor gasto no percurso.

class Carro {
    marca;
    cor;
    gasto; 

    constructor(marca, cor, gasto) {
        this.marca = marca;
        this.cor = cor;
        this.gasto = gasto;
    }

    calcGasto(distancia, precoCombustivel) {
        return distancia * this.gasto * precoCombustivel;
    }
}

const civic = new Carro('Honda', 'Preto', 1 / 10);
console.log(civic.calcGasto(70, 5));

const uno = new Carro('Fiat', 'Branco', 1 / 15);
console.log(uno.calcGasto(70, 5));