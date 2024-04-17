function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
return console.log(palabras.join(' '))
}
dePalabrasAFrase(["hola", "pedro,", "como", "andas?"])
module.exports = dePalabrasAFrase;
