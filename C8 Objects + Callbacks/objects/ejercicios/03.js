const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  objeto[propiedad] = valor;
  return objeto;
}
let animales={pato:"negro"}
console.log(agregarNuevaPropiedad(animales,"color","azul"))

module.exports = agregarNuevaPropiedad;
