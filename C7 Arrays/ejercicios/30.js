function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const set = new Set();
  for (const numero of numeros) {
      if (set.has(numero)) return numero;
      set.add(numero);
  }
  return undefined;
}
console.log(encontrarElementoRepetido([1,1,2]))

module.exports = encontrarElementoRepetido;