function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   return objeto;
}
let animales={pato:"negro"}
console.log(actualizarValorPropiedad(animales,"color","azul"))
module.exports = actualizarValorPropiedad;
