const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  for (ñ  in objeto){
    let count = 0
    count++
    return count
  }
}
let objeto={gato:"azul"}
console.log(contarPropiedades(objeto))

module.exports = contarPropiedades;
