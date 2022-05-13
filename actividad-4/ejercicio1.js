var numero;
var contador = 1;
numero = Number(prompt("Ingrese un numero: "));

while (contador <= numero) {
    if ((contador % 5) == 0) {
        console.log(contador + " es multiplo de 5");
    }
    contador++;
};