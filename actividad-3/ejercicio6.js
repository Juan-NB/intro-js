let nombre, edad;
nombre = prompt("Ingrese su nombre").toLowerCase();
edad = Number(prompt("Ingrese su edad:"));

if (edad >= 18) {
    console.log("Puede ingresar a la discoteca");
    if (nombre === "mario" || nombre === "carlos") {
        console.log("Y puedes ingresar al VIP");
    }
} else if (edad < 18) {
    console.log("No puede ingresar a la discoteca");
}