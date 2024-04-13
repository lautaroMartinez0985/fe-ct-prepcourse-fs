function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:

  for (let i = 0; i < 1; i++){
    if (booleano1 & booleano2 == true){
      return true
    }
    return false 
  }
  }

console.log(esVerdaderoYFalso(true, false))

module.exports = esVerdaderoYFalso;
