function esVocal(letra) {

  const vocal =  ["a","e","i","o","u"]
  if (vocal.includes(letra)){
    return "es vocal"
  }
  return "dato incorrecto"
}
console.log(esVocal("a"))

  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:

module.exports = esVocal;
