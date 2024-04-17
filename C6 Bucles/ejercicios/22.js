function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
 
let B = 0
do {
  
  num+= 5;
  B++;
} while (B < 8);

return num
}
console.log(doWhile(2))
module.exports = doWhile;