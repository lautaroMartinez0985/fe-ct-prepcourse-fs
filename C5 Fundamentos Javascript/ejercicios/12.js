function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
    const miCadena1 = str1.length
    const miCadena2 = str2.length
    if (miCadena1 == miCadena2){
      return true
    }
    else {
      return false
    }

}

console.log(tienenMismaLongitud("hola" , "hola"))

module.exports = tienenMismaLongitud;