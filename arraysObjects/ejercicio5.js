// 1. Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos map para duplicar cada número
const numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados); 

// 3. Creamos un array de objetos que representan productos
const productos = [
    { nombre: "Producto 1", precio: 100 },
    { nombre: "Producto 2", precio: 200 },
    { nombre: "Producto 3", precio: 300 }
];

// 4. Utilizamos map para crear un array solo con los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos); 

// 5. Utilizamos map para aplicar un descuento del 10% a todos los productos
const productosConDescuento = productos.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
}));
console.log(productosConDescuento);


// 6. Creamos un array de strings con nombres
const nombres = ["ana", "mario", "lucia", "juan"];

// 7. Utilizamos map para capitalizar la primera letra de cada nombre
const nombresCapitalizados = nombres.map(nombre => 
    nombre.charAt(0).toUpperCase() + nombre.slice(1)
);
console.log(nombresCapitalizados); 

// 8. Creamos una función que formatea un número como moneda
function formatearComoMoneda(numero) {
    return `$${numero.toFixed(2)}`;
}

// 9. Utilizamos map con la función formatearComoMoneda
const preciosFormateados = productosConDescuento.map(producto => ({
    ...producto,
    precioFormateado: formatearComoMoneda(producto.precio)
}));
console.log(preciosFormateados);


// 10. Utilizamos map con el índice del elemento
const productosConIndices = productos.map((producto, indice) => ({
    ...producto,
    indice: indice
}));
console.log(productosConIndices);

