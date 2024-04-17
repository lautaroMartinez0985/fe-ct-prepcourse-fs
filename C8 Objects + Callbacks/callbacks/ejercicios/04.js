function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   return cb (arrayOfNumbers)
}
function suma (arrays){
  return arrays.reduce((n,a)=> n +a)
}

console.log(sumarArray([1,2,3,4],suma))
module.exports = sumarArray;
