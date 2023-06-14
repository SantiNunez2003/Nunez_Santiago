
function numeroRandom(){

    var numeros = [];
    while (numeros.length < 100) {

        var numero = Math.floor(Math.random() * 100) + 1;//utilizamos la funcion Math para obtener un numero random entre el 1 y 100

    if (!numeros.includes(numero)) {//Verificamos que ese numero no se repita
      numeros.push(numero);
    }
  }
  return numeros;
}

aleatorio = numeroRandom()
for(i=0; i < aleatorio.length; i++){//Tomamos la longitud de aleatorio para imprimir los numeros dentro del array numeros

    document.write(aleatorio[i]+" <br>")
}
