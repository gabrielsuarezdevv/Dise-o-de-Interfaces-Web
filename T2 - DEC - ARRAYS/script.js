console.log("[Ejercicio 1]");
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cuadrados = arrNumbers.map(num => num ** 2);
const pares = arrNumbers.filter(num => num % 2 === 0);
const suma = arrNumbers.reduce((acc, num) => acc + num, 0);

console.log("Números originales:", arrNumbers);
console.log("Números al cuadrado:", cuadrados);
console.log("Números pares:", pares);
console.log("Suma de todos los números:", suma);

console.log("\n[Ejercicio 2]");
const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];
const ciudadesMayus = ciudades.map(ciudad => ciudad.toUpperCase());
const ordenAlfabetico = ciudades.sort();
const ciudadesComienzanConM = ciudades.some(ciudad => ciudad.startsWith("M"));
const longitudPalabras = ciudades.every(ciudad => ciudad.length > 4);

console.log("Ciudades originales:", ciudades);
console.log("Ciudades en mayúsculas:", ciudadesMayus);
console.log("Ciudades en orden alfabético:", ordenAlfabetico);
console.log("¿Alguna ciudad comienza con 'M'?", ciudadesComienzanConM);
console.log("¿Todas las ciudades tienen más de 4 letras?", longitudPalabras);

console.log("\n[Ejercicio 3]");

const arrEstudiantes = [
    { nombre: "Ana", edad: 20, nota: 8 },
    { nombre: "Luis", edad: 22, nota: 5 },
    { nombre: "María", edad: 19, nota: 7 },
    { nombre: "Carlos", edad: 21, nota: 4 },
];
const estudiantesAprobados = arrEstudiantes.filter(estudiante => estudiante.nota >= 5);
const ordenPorEdad = arrEstudiantes.sort((a, b) => a.edad - b.edad);
const nombresEstudiantes = arrEstudiantes.map(estudiante => estudiante.nombre);
const notaPromedio = arrEstudiantes.reduce((acum, num) => acum + num.nota, 0) / arrEstudiantes.length;

console.log("Estudiantes originales:", arrEstudiantes);
console.log("Estudiantes aprobados:", estudiantesAprobados);
console.log("Estudiantes ordenados por edad:", ordenPorEdad);
console.log("Nombres de los estudiantes:", nombresEstudiantes);
console.log("Nota promedio de los estudiantes:", notaPromedio);

console.log("\n[Ejercicio 4]");

const arrPalabras = ["Coche", "Moto", "Barco", "Quad"]
const palabrasLength5 = arrPalabras.filter(palabra => palabra.length > 5);
const reversion = arrPalabras.map(palabra => palabra.split("").reverse().join(""));
const ordenPorLongitud = arrPalabras.sort((a, b) => a.length - b.length);

console.log("Palabras originales:", arrPalabras);
console.log("Palabras con más de 5 letras:", palabrasLength5);
console.log("Palabras invertidas:", reversion);
console.log("Palabras ordenadas por longitud:", ordenPorLongitud);

console.log("\n[Ejercicio 5]");

const arrNumeros1 = [1, 2, 3, 4, 5];
const arrNumeros2 = [6, 7, 8, 9, 10];
const arrSumados = arrNumeros1.map((num, index) => (num + arrNumeros2[index]));
const arrMultiplicadoPorIndice = arrSumados.map((num, index) => num * index);
const indiceNumMayor10 = arrSumados.findIndex(num => num > 10);

console.log("Array 1:", arrNumeros1);
console.log("Array 2:", arrNumeros2);
console.log("Suma de ambos arrays:", arrSumados);
console.log("Array sumado multiplicado por su índice:", arrMultiplicadoPorIndice);
console.log("Index del primer número mayor que 10 en el array sumado:", indiceNumMayor10);

console.log("\n[Ejercicio 6]");

const arrFrase = ["La", "vida", "es", "bella", "y", "divertida"];
const fraseReducida = arrFrase.reduce((acm, palabra) => acm + " " + palabra);
const fraseRevertida = arrFrase.reverse().join(" ");
const buscarPalabra = arrFrase.includes("bella");

console.log("Array original:", arrFrase);
console.log("Frase reducida:", fraseReducida);
console.log("Frase revertida:", fraseRevertida);
console.log("¿La frase contiene la palabra 'bella'?", buscarPalabra);

console.log("\n[Ejercicio 7]");

const arrNumeros = [];
for(let i = 0; i < 10; i++){
    arrNumeros.push(Math.floor(Math.random() * 100 + 1));
}
const maximo = Math.max(...arrNumeros);
const minimo = Math.min(...arrNumeros);
const impares = arrNumeros.filter(num => num % 2 !== 0)

console.log("Array de números aleatorios:", arrNumeros);
console.log("Número máximo:", maximo);
console.log("Número mínimo:", minimo);
console.log("Números impares:", impares);