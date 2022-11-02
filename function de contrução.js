function Pessoa (nome) {
  this.nome = nome
  this.walk = function() {
    return this.nome + " está andando"
  }
}
const Lucas = new Pessoa("Lucas")
console.log (Lucas.walk())