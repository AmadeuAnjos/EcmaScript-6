
class Sofa {

  constructor(tamanho, inclina, cor, formatoL){
    this.tamanho
    this.inclina
    this.cor
    this.formatoL
  }

  inclina() {
    if(this.inclina === true){
      console.log("Sofá é inclinavél")
    } else {
      console.log("Sofá não é inclinavél")
    }
  }
  
  formato() {
    if(this.formatoL === true){
      console.log("Sofá tem o formato em L, ou seja, precisa de um espaço grande.")
    } else {
      console.log("Não é em formato L, ele mede 1,20 mts.")      
  }
}
}

let sofas = Array()

sofas.push("Grande", false, "Preto", false)
sofas.push("Médio", true, "Roso", true)

console.log(sofas)

