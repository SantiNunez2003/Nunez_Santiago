
function cadenaTexto(oracion){

    if(oracion === oracion.toUpperCase()){
        document.write("Su oracion esta en MAYUSCULAS") 
    }else if( oracion === oracion.toLowerCase()){
        document.write("Su oración está en minúsculas");
    }else{
        document.write("Su oración tiene una mezcla de mayúsculas y minúsculas");
    }
}

var oracion = prompt("Ingrese una oracion")
cadenaTexto(oracion)