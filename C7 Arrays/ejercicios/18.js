function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = resultadosTest.reduce((v, l) => v + l, 0);
  return suma / resultadosTest.length 

}

console.log(promedioResultadosTest([10,8,7,7]))

module.exports = promedioResultadosTest; 
