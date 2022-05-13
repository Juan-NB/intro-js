var n1, n2, n3;
n1 = Number(prompt("Ingrese un numero: "));
n2 = Number(prompt("Ingrese un numero: "));
n3 = Number(prompt("Ingrese un numero: "));

if (n1 > n2 && n1 > n3) {
    console.log(n1 + " es mayor que: " + n2 + " y " + n3);
    if (n2 == n3) {
        console.log("El segundo número = " + n2 + " y el tercer número = " + n3 + " son iguales");
    }
} else if (n2 > n1 && n2 > n3) {
    console.log(n2 + " es mayor que: " + n1 + " y " + n3);
    if (n1 == n3) {
        console.log("El primer número = " + n1 + " y el tercer número = " + n3 + " son iguales");
    }
} else if (n3 > n1 && n3 > n2) {
    console.log(n3 + " es mayor que: " + n1 + " y " + n2);
    if (n1 == n2) {
        console.log("El primer número = " + n1 + " y el segundo número = " + n2 + " son iguales");
    }
}