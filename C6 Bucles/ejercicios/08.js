function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   for(let i = 0; i<1; i++){
      if (a < 10 & a>0){
         return true
      }
      return false
   }
}
console.log(esPositivoOInferiorA10(11))

module.exports = esPositivoOInferiorA10;
