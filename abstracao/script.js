//Abstração de objeto
class ContaBancaria {

  constructor(){
    this.agencia =  1022
    this.numeroConta = 123456
    this.saldo = 3000
    this.limite = 6000
  }

  depositar(valorDeposito) {
    this.saldo += valorDeposito
  }

  sacar(valorSaque) {
    this.saldo -= valorSaque
  }

  consultarSaldo() {
    return this.saldo
  }
}

let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo())
x.depositar(1000)
console.log(x.consultarSaldo())
x.sacar(2500)
console.log(x.consultarSaldo())
console.log(y.consultarSaldo())