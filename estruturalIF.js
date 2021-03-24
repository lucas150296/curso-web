function notaFinal(nota) {
  if (nota >= 7) {
    //obs.: não usa-se ; nas estruturas de controle.
    console.log("Aprovado com nota " + nota);
  } else {
    console.log("reprovado com nota " + nota);
  }
}
notaFinal(8.1);
notaFinal(6.1);
