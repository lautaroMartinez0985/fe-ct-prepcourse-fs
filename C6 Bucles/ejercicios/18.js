function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let numero = 1;

  let inicio = Math.min(a, b);
  let fin = Math.max(a, b);

  for (let ñ= inicio; ñ<=fin; ñ++){
    numero *= ñ;
  }
  return numero
}
console.log(productoEntreNúmeros(9,90))
module.exports = productoEntreNúmeros;