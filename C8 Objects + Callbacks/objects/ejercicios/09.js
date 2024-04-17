function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let usuario = {
  nombre:nombre,
  emeail:email,
  password:password
  }
  return usuario;
}
console.log(nuevoUsuario("pedro","gatitaSexi777@gmail.com","1h2h3hwrpQ"))

module.exports = nuevoUsuario;
