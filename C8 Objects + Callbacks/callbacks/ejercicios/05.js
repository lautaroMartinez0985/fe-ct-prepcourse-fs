function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  let result = [];
  array.forEach(e => result.push(cb(e)));
  return result;
}

function muestra(e) {
  return e + 2;
}



console.log(forEach([1,3,4],muestra))
module.exports = forEach;
