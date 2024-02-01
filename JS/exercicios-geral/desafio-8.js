// Crie uma classe para representar pessoas.

// Para cada pessoa temos os atributos nome, peso e altura.
// As pessoas devem ter a capaciade de dizer o valor do seu IMC.
// Inicie uma pessoa chamada Jose que tem 70kg e 1.75 de altura, e peça a Jose para dizer o valor do seu IMC.

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcImc();
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
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.classificarImc());