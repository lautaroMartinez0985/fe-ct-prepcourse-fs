function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:

for (let ñ= 0; ñ<1; ñ++){
    if (idioma === "aleman")
    {
      return "Guten Tag!"
     }
   else if (idioma === "mandarin" ){
     return "Ni Hao!"
   }
   else if (idioma === "ingles"){
     return "hello!"
   }
   return "Hola!"
  };
}
console.log(saludo("aleman"));

module.exports = saludo;
