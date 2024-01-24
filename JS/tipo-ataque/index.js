class hero {
	constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
    }
    escrever(){
    console.log("O " + this.nome + " atacou usando " + this.tipo)
    }
}

let guerreiro = new hero("guerreiro", "espada")
let mago = new hero("mago", "magia")
let monge = new hero("monge", "artes marciais")
let ninja = new hero("ninja", "shuriken")

guerreiro.escrever()
mago.escrever()
monge.escrever()
ninja.escrever()