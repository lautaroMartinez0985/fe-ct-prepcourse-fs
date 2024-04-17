function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
   let a= objetoUsuario["posts"]=[
  {likes:3},{likes:8},{likes:5}
  ]
  return a.reduce((a,b)=>a+b.likes,0)
}
let posts={};
console.log(sumarLikesDeUsuario(posts))
module.exports = sumarLikesDeUsuario;
