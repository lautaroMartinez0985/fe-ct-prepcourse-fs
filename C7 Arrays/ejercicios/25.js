function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cantidadPares = 0;
  let suma = numeros;
  for (let i = 0; i < suma.length; i++) {if(suma[i]%2!== 0) {continue;}
      cantidadPares++;}
return cantidadPares;}
console.log(contarParesConContinue([1,2,3,4,5,6,7,8,9]))

module.exports = contarParesConContinue;
