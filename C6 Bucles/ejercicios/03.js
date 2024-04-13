function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x === y) {
    return x;
  }
  let maximo = x
  for (let i= x; i<=x; i++){
    maximo= i
  }
  return maximo
}

console.log(obtenerMayor(9,9))

module.exports = obtenerMayor;
