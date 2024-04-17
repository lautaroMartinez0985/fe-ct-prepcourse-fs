function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:


  for (let ñ= 0; ñ<1; ñ++ ){

    const valores = {
      1: "lunes",
      2: "martes",
      3: "miercoles",
      4: "jueves",
      5: "viernes",
      6: "sabado",
      7: "domingo"
    } 

    if (num => 1 && num <= 7){
      return valores [numero]
    }
    return "no es un dia de la semana"

  }
  
}
console.log(obtenerDiaSemana(1))
module.exports = obtenerDiaSemana;
