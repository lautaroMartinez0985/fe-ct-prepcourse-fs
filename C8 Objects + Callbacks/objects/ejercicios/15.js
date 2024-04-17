function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  objeto[propiedad]="ola";
  if(objeto.hasOwnProperty(propiedad)!==false){return true};
  return false;
};
let objet={};
console.log(tienePropiedad(objet,"propiedad"));
module.exports = tienePropiedad;
