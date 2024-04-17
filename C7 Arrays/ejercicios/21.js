function mesesDelAño(array) {
 for (let i = 0; i < array.length; i++) {
    if (/(Enero|Marso|Noviembre)/i.test(array[i])) {
      return array.filter(mes => /(Enero|Marzo|Noviembre)/i.test(mes))}}
return "No se encontraron los meses";}
console.log(mesesDelAño(["Enero","Abril","Noviembre","Marzo","Mayo"]))

module.exports = mesesDelAño;
 // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código: