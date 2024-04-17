function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let F= array.find((num)=> num)
   return array.indexOf(num)
}
console.log(encontrarElemento(9,["hola",5,9]))
module.exports = encontrarElemento;
