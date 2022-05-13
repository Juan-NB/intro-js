var numero;
var contador = 1;
numero = Number(prompt("Ingrese un numero:"));

do {
    if ((contador % 5) == 0) {
        console.log(contador + " es multiplo de 5");
    }
    contador++;
} while (contador <= numero);