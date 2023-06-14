
function textoAlreves (texto){

    var palabras =  texto.split(' '); //Nos separa las palabras del texto
    var palabrasRevertidas = palabras.reverse();//Da vuelta el orden de las palabras
    var textoRevertido = palabrasRevertidas.join(' ');//Une todas las palabras para devolver el texto revertido

    return textoRevertido;
}

var texto = prompt("Ingrese un texto")

texto_revertido = textoAlreves(texto)
document.write(texto_revertido)