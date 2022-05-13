// inicializar mi contador

let count = 0;

//tarer el elemento

let value = document.getElementById('contador');

//metodo del evento incrementar

function increment() {
    count++;
    value.textContent = count;
}

function decrement() {
    if (count > 0) {
        count--;
        value.textContent = count;
    } else {
        alert("Alto, números negativos")
    }
}

function reset() {
    count = 0;
    value.textContent = count;
}