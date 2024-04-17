function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  let f = objetoUsuario.amigos=["pedro","maria","jose"];
  f.push(nuevoAmigo)
  return f;
}
let frieds={};
console.log(agregarAmigo(frieds,"elena"))

module.exports = agregarAmigo;
