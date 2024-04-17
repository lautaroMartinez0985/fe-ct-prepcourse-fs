function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código
  objetoUsuario.psw=[nuevaPassword];
  return objetoUsuario};
let contraseña={psw:123};
console.log(actualizarPassword(contraseña,4312));

module.exports = actualizarPassword;
