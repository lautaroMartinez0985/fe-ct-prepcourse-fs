function todosIguales(array) {if (new Set(array).size === 1){return true} 
return false};
console.log(todosIguales([9,9]));
module.exports = todosIguales;
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código
