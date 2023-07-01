//Paradigma procedural

//cadeira

//array de cadeiras
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['perna'] = 4
cadeiras[0]['gira'] = false
cadeiras[0]['cor'] = 'bege'

cadeiras[1] = Array()
cadeiras[1]['perna'] = 1
cadeiras[1]['gira'] = true
cadeiras[1]['cor'] = 'cinza'

cadeiras[2] = Array()
cadeiras[2]['perna'] = 2
cadeiras[2]['gira'] = true
cadeiras[2]['cor'] = 'cinza'

console.log(cadeiras)

function giraCadeira(indice) {
  if(cadeiras[0]["gira"] === true){
    console.log('Giratória')
  }else{
    console.log('Fixa')
  }
}

function addCadeira(pernas, gira, cor) {
  let cadeira = Array()

  cadeira['pernas'] = pernas
  cadeira['gira'] = gira
  cadeira['cor'] = cor

  cadeiras.push(cadeira)
}

addCadeira(10, true, 'Preto')

console.log(cadeiras)


//paradigma orientado objeto

class Cadeira {

  constructor(perna, gira, cor){
    this.perna = perna
    this.gira = gira
    this.cor = cor
  }

  giraCadeira() {
    if (this.gira === true) {
     console.log('Giratóriaaaaa') 
    }else{
      console.log('Fixação')
    }
  }    
}

let cadeiras = Array()

cadeiras.push(5, true, 'branco')
cadeiras.push(3, false, 'azul')
cadeiras.push(1, true, 'pink')
cadeiras.push(2, false, 'marrom')

console.log(cadeiras)
/* cadeira.giraCadeira() */

