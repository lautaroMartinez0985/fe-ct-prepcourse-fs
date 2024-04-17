function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  objetoUsuario[password]=1;
  if(objetoUsuario.hasOwnProperty(password)=== false){return true}
  return false
}
let user={};
console.log(verificarPassword(user,"efejf"))

module.exports = verificarPassword;
