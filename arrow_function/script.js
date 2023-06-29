let quadrado = function(x = 5) {
  return x * x
}

document.write(quadrado(10, 10))
document.write('<br><br>')

let cubo = (x = 2) => {
  return x * x * x
}

document.write(cubo())
document.write('<br><br>')


/* let result = (num) => {

  if(num % 2 === 0){
    return 'Par'
  } else {
    return 'Ímpar'
  }
}

document.write("O numero é " + result(10)) */

let result = (num) => num % 2 === 0 ? 'par' : 'ímpar'


document.write("O numero é " + result(101))