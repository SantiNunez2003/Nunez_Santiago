
var mes = parseInt(prompt("Ingrese el número del mes (1-12):"));

var dias;

switch (mes) {
  case 1: // Enero
  case 3: // Marzo
  case 5: // Mayo
  case 7: // Julio
  case 8: // Agosto
  case 10: // Octubre
  case 12: // Diciembre
    dias = 31;
    break;
  case 4: // Abril
  case 6: // Junio
  case 9: // Septiembre
  case 11: // Noviembre
    dias = 30;
    break;
  case 2: // Febrero
    dias = "28 o 29";
    break;
  default:
    dias = "No es un mes válido";
}

document.write("El mes " + mes + " tiene " + dias + " días.");