
class Tv{
  constructor() {
    this._canais = Array(2, 4, 6, 8, 10, 12, 14, 16)
    this._ativo = 6
    this._volume = 10
  }

  get ativo() {
    return this._ativo
  }

  set ativo(canal) {
    if(this._canais.indexOf(canal) !== -1){
      this._ativo = canal
    }    
  }
}

let tv = new Tv()

tv.ativo = 10
console.log(tv.ativo)