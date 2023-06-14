
var valores = [true, false, 2, "hola", "mundo", 3, "char"];
    
var ordendeStrings = []; var numeros = [];

for(i = 0; i < valores.length; i++){

    if (typeof valores[i] === 'string'){
        ordendeStrings.push(valores[i])
    }

    if(typeof valores[i] === 'number'){
        numeros.push(valores[i])
    }
}
ordendeStrings.sort(function(a, b) {
   
    if (a.length === b.length) {
      return 0; 
    } else if (a.length < b.length) {
      return -1; 
    } else {
      return 1; 
    }
  });

var suma = numeros[0] + numeros[1]; var resta = numeros[0] - numeros[1]; var mult = numeros[0] * numeros[1]; var div = numeros[0] / numeros[1]

console.log(ordendeStrings, numeros, suma, resta, mult,div)

document.write(`<br/>-El vector origuinal es [${valores}]<br/><br/>Ordenamos los strings [${ordendeStrings}]<br/>` );
document.write(`<br/> La suma de ${numeros[0]} y ${numeros[1]} es = ${suma}<br/>`);
document.write(`<br/> La resta de ${numeros[0]} y ${numeros[1]} es = ${resta}<br/>`);
document.write(`<br/> La multiplicacin de ${numeros[0]} y ${numeros[1]} es = ${mult}<br/>`);
document.write(`<br/> La division de ${numeros[0]} y ${numeros[1]} es = ${div}<br/>`);




    



