function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  objeto[propiedad]= undefined;
  objeto["gato1"]="Meow!";
  delete objeto[propiedad];
  return objeto
}
let animales={}
console.log(eliminarPropiedad(animales,"perro"))
module.exports = eliminarPropiedad;
