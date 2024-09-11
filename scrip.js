// Variables con let
let num1 = 10;
let num2 = 20;
let nombre = "Juan";
let apellido = "Pérez";
let esMayorDeEdad = true;
let edad = 25;
let altura = 1.75;
let peso = 70;
let ciudad = "Bogotá";
let temperatura = 30;

// Variables con const
const pi = 3.1416;
const gravedad = 9.81;
const velocidadLuz = 299792458;
const numeroAvogadro = 6.022e23;
const nombreApp = "Self Time";

// Operaciones con las variables
let suma = num1 + num2; // 30
let producto = peso * altura; // 122.5
let saludo = "Hola, " + nombre + " " + apellido + "!";
let imc = peso / (altura * altura); // Índice de masa corporal (IMC)
let temperaturaEnFahrenheit = (temperatura * 9/5) + 32; // Conversión a Fahrenheit

// Uso del operador ternario
let mensajeMayorDeEdad = esMayorDeEdad ? "Es mayor de edad." : "Es menor de edad.";
let mensajeSaludo = (ciudad === "Bogotá") ? "Hola desde la capital!" : "Saludos desde " + ciudad;

console.log(suma);
console.log(producto);
console.log(saludo);
console.log("Tu IMC es: " + imc);
console.log("La temperatura en Fahrenheit es: " + temperaturaEnFahrenheit);
console.log(mensajeMayorDeEdad);
console.log(mensajeSaludo);
// Fin