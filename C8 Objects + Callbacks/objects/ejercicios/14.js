function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  objetoUsuario["email"]="gatitaSexi777@gmail.com";
  if (objetoUsuario.hasOwnProperty("email")&&objetoUsuario.email !== undefined){return true};
  return false;
}
let usuario={};
console.log(tieneEmail(usuario))

module.exports = tieneEmail;
