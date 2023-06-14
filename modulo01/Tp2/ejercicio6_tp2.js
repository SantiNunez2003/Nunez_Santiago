var texto = prompt("Ingrese una palabra");

var vocal_a = texto.indexOf("a"); var vocal_e = texto.indexOf("e"); var vocal_i = texto.indexOf("i"); var vocal_o = texto.indexOf("o"); var vocal_u = texto.indexOf("u");

var primerVocal = -1; 

if (vocal_a !== -1 && (primerVocal === -1 || vocal_a < primerVocal)) {
  primerVocal = vocal_a;
}
if (vocal_e !== -1 && (primerVocal === -1 || vocal_e < primerVocal)) {
  primerVocal = vocal_e;
}
if (vocal_i !== -1 && (primerVocal === -1 || vocal_i < primerVocal)) {
  primerVocal = vocal_i;
}
if (vocal_o !== -1 && (primerVocal === -1 || vocal_o < primerVocal)) {
  primerVocal = vocal_o;
}
if (vocal_u !== -1 && (primerVocal === -1 || vocal_u < primerVocal)) {
  primerVocal = vocal_u;
}
if (primerVocal !== -1) {

  var vocalEncontrada = texto.charAt(primerVocal);

  document.write("La primera vocal es " + vocalEncontrada + " en la posición " + (primerVocal + 1));
} else {

  document.write("No se encontraron vocales en la palabra ingresada.");
}