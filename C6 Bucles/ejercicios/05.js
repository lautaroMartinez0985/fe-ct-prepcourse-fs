function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:

  for (let i = 0; i < 1; i++){
    if (valor == true){
      return "Soy verdadero"
    }
    return "soy falso"
  }
}
console.log(esVerdadero(true))
module.exports = esVerdadero;
