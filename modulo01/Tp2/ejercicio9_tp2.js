
function promedioNotas(notas) {
    var acumulador = 0;
    for (var i = 0; i < notas.length; i++) {
      acumulador += notas[i];
    }
    return acumulador / notas.length;
  }
  
  var notas = []; var nota = 0;
  
  while (nota !== -1) {

    nota = parseInt(prompt("Ingrese las notas [Para finalizar, ingrese -1]:"));

    if (nota >= 0 && nota <= 10) {

      notas.push(nota);

    } else if (nota !== -1) {

      alert("INGRESE VALORES ENTRE 0 Y 10");
    }
  }
  
  var promedio = promedioNotas(notas);
  
  if (promedio <= 5) {
    document.write("Reprobado");
  } else if (promedio > 5 && promedio < 8) {
    document.write("Aprobado");
  } else {
    document.write("Sobresaliente");
  }