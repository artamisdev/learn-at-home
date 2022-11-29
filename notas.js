// const assert = require("assert");

function notas(nota) {
  if (nota < 60 && nota >0) {
    console.log ("F");
  }
  if (nota >= 90 && nota <= 100 ) {
    console.log ("A");
  }
  if (nota >= 60 && nota <= 69){
    console.log ("D");
  }
  if (nota >= 70 && nota <= 79){
    console.log ("C");
  }
  if (nota >= 80 && nota <= 89){
    console.log ("B");
  }
  if (nota > 100){
    console.log("Nota Inválida")
  }
};

notas(193);

// assert(notas(92)=== "A") | teste simples: Mudo os console.log pra return
