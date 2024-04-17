function multiplicarArgumentos(arguments) {
  if (!arguments.hasOwnProperty(0)) { return 0;} 
  else if (!arguments.hasOwnProperty(1)) {return arguments[0];} 
  else { return Array.from(arguments).reduce((acumulador, valor) => acumulador * valor);}}
console.log(multiplicarArgumentos([1,2,3,4]))
module.exports = multiplicarArgumentos;


 