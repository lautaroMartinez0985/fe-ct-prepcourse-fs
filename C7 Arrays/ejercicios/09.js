function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   let iA = Math.floor(Math.random() * array.length);
   return array[iA];
}

console.log(obtenerElementoAleatorio([1,2,3,4,5]))
module.exports = obtenerElementoAleatorio;
