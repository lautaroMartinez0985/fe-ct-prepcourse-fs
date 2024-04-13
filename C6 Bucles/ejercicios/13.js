function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  for (let ñ= 0; ñ<1; ñ++){
    if (num % 1 === 0){
      return true
    }
    return false
  }
}
console.log(esEntero(-1))
module.exports = esEntero;
