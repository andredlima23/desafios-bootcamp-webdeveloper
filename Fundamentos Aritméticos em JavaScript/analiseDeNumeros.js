let i = 0;
let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

while (i < 5) {
  let valor = parseInt(gets());
  if (valor % 2 === 0) {
    par += 1;
  }
  if (valor % 2 !== 0) {
    impar += 1;
  }
  if (valor > 0) {
    positivo += 1;
  }
  if (valor < 0) {
    negativo += 1;
  }
  
  i += 1;
}
console.log(par + " valor(es) par(es)")
console.log(impar + " valor(es) impar(es)")
console.log(positivo + " valor(es) positivo(s)")
console.log(negativo + " valor(es) negativo(s)")