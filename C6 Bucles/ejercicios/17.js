function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let colores;

  switch (color) {
    case "blue":
      colores = "This is blue";
      break;
    case "red":
      colores = "This is red";
      break;
    case "green":
      colores = "This is green";
      break;
    case "orange":
      colores = "This is orange";
      break;
    default:
      colores = "color no valido";
  }
  
  return colores;
}

console.log(colors());
module.exports = colors;
