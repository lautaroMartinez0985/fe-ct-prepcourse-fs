const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
   const a = objeto[propiedad];

   return console.log(a);
};
let objeto={perro:"negro"}
obtenerValorPropiedad(objeto,"perro")
module.exports = obtenerValorPropiedad;
