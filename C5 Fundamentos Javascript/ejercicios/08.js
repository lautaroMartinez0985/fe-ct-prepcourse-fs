function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:

  if (numero % 1 == 0){
    return true;
  }

  return false;
}
console.log (esNumeroEntero(2.3))

module.exports = esNumeroEntero;