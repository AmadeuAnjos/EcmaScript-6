
class Animal {
  constructor() {
    this.cor = ""
    this.tamanho = null
  }

  dormir() {
    console.log("Dormir")  
  }
}

class Cachorro extends Animal {

  constructor() {
    super()
    this.orelhas = "grandes"
  }

  correr() {
    console.log('Correr')
  }
  
  rosnar() {
    console.log('Rosnar')
  }
}

class Bird extends Animal{

  constructor() {
    super()
    this.bico = "Grande"
  }

  voar() {
    console.log('Voar')
  } 
}

class Papagaio extends Bird {

  constructor() {
    super()
    this.falarr = true
  }

  falar() {
    console.log("Falar")
  }
}

let cachorro = new Cachorro()
let bird = new Bird()
let papagaio = new Papagaio()

/* console.log(cachorro)
console.log(bird)
console.log(papagaio) */

cachorro.dormir()
bird.dormir()
papagaio.falar()
papagaio.dormir()
papagaio.voar()