// Ejercicio: Uso del método filter en JavaScript

// 1. Creamos un array de números
// const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos filter para obtener solo los números pares
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 4]

// 3. Creamos un array de objetos que representan personas
const personas = [
    { nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
    { nombre: 'Maria', edad: 22, ciudad: 'Barcelona' },
    { nombre: 'Pablo', edad: 30, ciudad: 'Madrid' },
    { nombre: 'Ana', edad: 28, ciudad: 'Madrid' },
    { nombre: 'Carlos', edad: 24, ciudad: 'Barcelona' }
  ];

// 4. Filtramos personas mayores de 25 años

const personasMayoresDe25 = personas.filter(persona => persona.edad > 25);
console.log(personasMayoresDe25); 


// 5. Filtramos personas que viven en Madrid
const personasEnMadrid = personas.filter(persona => persona.ciudad === 'Madrid');
console.log(personasEnMadrid);

// 6. Creamos una función para filtrar por ciudad


// 7. Filtramos personas cuyo nombre empiece por 'M'


// 8. Creamos un array de strings


// 9. Filtramos palabras con más de 6 letras


// 10. Combinamos múltiples condiciones en un filtro


// 11. Filtramos usando una lista de valores permitidos