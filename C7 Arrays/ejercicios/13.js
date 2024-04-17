function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let finder= array.filter((ñ) => ñ%2===0) 
  return finder
}
console.log(filtrarNumerosPares([2,4,6,5,3]))

module.exports = filtrarNumerosPares;
