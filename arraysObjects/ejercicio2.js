// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Creamos un array de números

const numeros = [1, 2, 3, 4, 5];

// 2. Recorremos el array con un bucle for
console.log("1.");
for (let i; i < numeros.length; i++) {
    console.log(numeros);
}

// 3. Recorremos el array con forEach
console.log("2.");
numeros.forEach((numero) => {
    console.log(numeros);
});

// 4. Calculamos la suma de los números usando for
console.log("3.");
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}
console.log("La suma total es:", suma);

// 5. Calculamos la suma de los números usando forEach
console.log("4.");
let suma1 = 0;
numeros.forEach((numero) => {
    suma1 += numero;
});
console.log("La suma total es:", suma1);

// 6. Creamos un nuevo array con los números pares usando for
console.log("5.");

let numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
    }
}
console.log("El array de numeros pares es:", numerosPares);

// 7. Creamos un nuevo array con los números pares usando forEach
console.log("6.");

let numerosParesForEach = [];
numeros.forEach((numero) => {
    if (numero % 2 === 0) {
        numerosParesForEach.push(numero);
    }
});
console.log("Números pares (forEach):", numerosParesForEach);
