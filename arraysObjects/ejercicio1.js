// Ejercicio: Manejo básico de arrays en JavaScript
// const frutas = ["manzana", "banana", "naranja", "fresa", "uva"];
// 1. Crea un array llamado 'frutas' con 5 nombres de frutas

let frutas = ["manzana", "banana", "naranja", "fresa", "uva"];

// 2. Imprime el array completo

console.log(frutas);

// 3. Imprime la longitud del array

console.log(frutas.length);


// 4. Accede e imprime el tercer elemento del array

console.log(frutas[2]);
console.log(frutas);
console.log();

// 5. Añade una fruta al final del array usando push()

frutas.push("Kiwi");
console.log(frutas);
console.log();

// 6. Elimina el último elemento del array usando pop()

frutas.pop();
console.log(frutas);
console.log();
// 7. Añade una fruta al principio del array usando unshift()

frutas.unshift("Mango");
console.log(frutas);
console.log();
// 8. Elimina el primer elemento del array usando shift()

frutas.shift();
console.log(frutas);