function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  for (let i=0; i<1; i++){
    if(status == 1){
      return "online"
    }
    else if ( status == 2 ){
      return "away"
    }
    return "offline"
  }
}
console.log(conection(1))

module.exports = conection;
