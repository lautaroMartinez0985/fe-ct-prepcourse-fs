function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
    return cb(array)
}
function gatitaSexi777(array){
  return array.map(e=> e*4)
   
}
console.log(map([1,2,3],gatitaSexi777))

module.exports = map;
