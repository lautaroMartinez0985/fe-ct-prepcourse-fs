function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:

  for (let ñ= 0; ñ<1; ñ++){
    if (num < 50 & num > 20){
      return true
    }
    return false
  }
}
console.log(estaEnRango(21))

module.exports = estaEnRango;
