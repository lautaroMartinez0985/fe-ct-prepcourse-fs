const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  return callback(array)
};
function retornarElemento(array){
    if(array.includes(3)){
        return 3
    }
    return "no se encontro el elemento"
}
console.log(buscarElemento([1,2],retornarElemento))


module.exports = buscarElemento;
