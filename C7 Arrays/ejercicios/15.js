function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let bigger =  Math.max.apply(null, array)
  return array.indexOf(bigger)
}
console.log (encontrarIndiceMayor([10,5,3,90]))

module.exports = encontrarIndiceMayor;
