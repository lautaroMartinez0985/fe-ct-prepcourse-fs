function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
    let resultado = [];
    let iteraciones = 0;
 while (iteraciones < 10) {
      if (num === iteraciones) {return "Se interrumpió la ejecución";}
        resultado.push(num);
        num += 2;
        iteraciones++;}
   return resultado;}
console.log(breakStatement(10));
module.exports = breakStatement;
