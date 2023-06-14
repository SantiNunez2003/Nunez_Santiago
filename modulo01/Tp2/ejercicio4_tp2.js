
var n

function Numero(n){

    if(n % 2 ===0 ){
        return " es PAR"
    }else{
        return " es IMPAR"
    }
}
num = prompt("ingrese un numero para saber si es PAR o IMPAR")
n = parseInt(num)

document.write("El numero " + n + Numero(n))