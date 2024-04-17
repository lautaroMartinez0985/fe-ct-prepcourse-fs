function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let suma= 0;
   for (let ñ=1; ñ<n; ñ++){
      suma += 1;
      if (suma == 100){
         break
      }
   }
   return suma
}
console.log(sumarHastaNConBreak(3))
module.exports = sumarHastaNConBreak;
