function agregarPropiedad(objeto, propiedad) {
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
  const a = objeto[propiedad]= null;
  return a
}
let nulo={}
console.log(agregarPropiedad(nulo,"nilidad"))

module.exports = agregarPropiedad;
