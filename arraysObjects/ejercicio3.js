// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
/* const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Física", "Programación"],
    calificaciones: {
        matematicas: 90,
        fisica: 85,
        programacion: 95
    }
}; */
// 1. Creamos el objeto estudiante (ya está creado en el enunciado)

// 2. Accedemos y mostramos propiedades del objeto
console.log(estudiante.nombre); // Imprime: Juan
console.log(estudiante.materias[1]); // Imprime: Física
console.log(estudiante.calificaciones.programacion); // Imprime: 95

// 3. Modificamos una propiedad
estudiante.edad = 21;

// 4. Añadimos una nueva propiedad
estudiante.ciudad = "Madrid";

// 5. Recorremos las propiedades del objeto con for...in
for (let propiedad in estudiante) {
  console.log(propiedad + ": " + estudiante[propiedad]);
}

// 6. Creamos un método en el objeto
estudiante.saludar = function() {
  console.log("Hola, soy " + this.nombre);
};

// 7. Llamamos al método
estudiante.saludar();

// 8. Creamos un array de objetos
const estudiantes = [
  { nombre: "Ana", edad: 22, carrera: "Medicina" },
  { nombre: "Pedro", edad: 19, carrera: "Derecho" }
];

// 9. Recorremos el array de objetos
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i].nombre);
}

// 10. Buscamos un estudiante por su nombre
function buscarEstudiante(nombre) {
  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre === nombre) {
      return estudiantes[i];
    }
  }
  return null;
}

const estudianteEncontrado = buscarEstudiante("Ana");
console.log(estudianteEncontrado);