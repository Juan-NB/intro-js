let numeros = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 3) {
        console.log(numeros[i]);

    }
}
let contador = 1;
let arreglo = [];
while (contador <= 5) {
    let numero = Number(prompt("Digite un numero:"));
    arreglo.push(numero);
    contador++;
}
console.log(arreglo);