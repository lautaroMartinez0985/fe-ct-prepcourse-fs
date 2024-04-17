function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
/*   return arrayOfNums.map(num )
    {
       return num  */

  return arrayOfNums.reduce(function(v, l){
     return v+l
  }, 0)
 
}
console.log(agregarNumeros([1,2,3,4]))
module.exports = agregarNumeros;
