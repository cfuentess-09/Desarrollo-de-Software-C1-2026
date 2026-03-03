/*
Comenterio multilinea
*/

// Comentario de una sola linea
//consolo.log es un quivalente  a print () en Python.
console.log("Hola Mundo desde imc.js");
console.log("Otro mensaje...");

//Costante: valor que no cambia durante la ejecucion del programa.
const PI = 3.1416;
console.log("El valor de PI es: " + PI);

const IVA = 0.13;
console.log("El valor del IVA es: " + IVA);

const MAX_Usuarios = 100;
console.log("El numero maximo de usuarios es: " + MAX_Usuarios);

const Gravedad = 9.81;
console.log("El valor de la gravedad es: " + Gravedad);

const TIPO_USUARIO = "Visitante";

//Variables: valor que puede cambiar durante la ejecucion del programa.

// Función: Bloque de código reutilizable que realiza una tarea específica.

/* Crear una función para calcular el IMC con la siguiente fórmula:
IMC = peso / estatura^2
Mostrar en la consola un mensaje que diga "El IMC es: --"
Datos de prueba en kg       m       IMC
                    80      1.7     27.7
                    60      1.8     18.5
*/

function calcularIMC(peso, estatura) {
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    console.log("El IMC es: " + imc.toFixed(2)); // Definir la cantidad de decimales con toFixed()
}

calcularIMC(80, 1.7);
calcularIMC(60, 1.8);

// Función con datos de salida (valor de retorno)
function calcularIMCRetorno(peso, estatura) {
    //               (estatura*estatura)
    let imc = peso / Math.pow(estatura, 2);
    return imc.toFixed(2);
}

console.log("El IMC es: " + calcularIMCRetorno(80, 1.7));
console.log("El IMC es: " + calcularIMCRetorno(60, 1.8));

/* Crear una función para calcular el área de un rectángulo
Datos de prueba:    base    altura      área
                    5       3           15
                    4                   16 
                    ""      2           Error
                    0       2           Error
*/
function areaRectangulo(base, altura) {
    // Condicional para asignar altura = base si solo hay un dato de entrada
    if (altura === undefined) {
        altura = base;
    }

    if (typeof base !== "number" || typeof altura !== "number" || base <= 0 || altura <= 0) {  //|| es el operador lógico OR, && es el operador lógico AND, ! es el operador lógico NOT
        return "Error: Los datos deben ser números positivos";
    }

    return base * altura;
}
console.log("El área del rectángulo es: " + areaRectangulo(5, 3));
console.log("El área del rectángulo es: " + areaRectangulo(5));
console.log(areaRectangulo("5"));
console.log(areaRectangulo(0, 2));

// || : or
// && : and

/*
Ejercicio: Crear una función para convertir temperaturas entre Celsius y Fahrenheit.

Diseñar una función llamada convertirTemperatura que convierta una temperatura entre grados Celsius (°C) y Fahrenheit (°F) según la unidad solicitada. 

Datos de entrada: Temperatura y escala a la cual se debe convertir la temperatura

conversión de temperatura  = (temperatura - 32) * 5 / 9; // Fahrenheit a Celsius  
conversión de temperatura  = (temperatura * 9 / 5) + 32; // Celsius a Fahrenheit    

Datos de prueba:    Temperatura     Escala a convertir      Resultado esperado
                    25              F                       77
                    32              C                       0
                    "100"           C                       Error
                    0               a                       Error
*/
function convertirTemperatura(temperatura, escala) {
    if (typeof temperatura !== "number" || (escala !== "C" && escala !== "F")) {            // Verificar que la temperatura sea un número y que la escala sea "C" o "F"
        return "Error: La temperatura debe ser un número y la escala debe ser 'Celsius' o 'Fahrenheit'"; // Retornar un mensaje de error si la temperatura no es un número o si la escala no es válida 
    }

    if (escala === "C") {                    // Si la escala es "C", convertir de Fahrenheit a Celsius
        return (temperatura * 9 / 5) + 32;  // retornar la temperatura convertida a Fahrenheit
    } else {                                // Si no es "C", entonces es "F", convertir de Celsius a Fahrenheit
        return (temperatura - 32) * 5 / 9;  // Retornar la temperatura convertida a Celsius
    }
}

console.log("La temperatura convertida es: " + convertirTemperatura(25, "F")); // Llamar a la función convertirTemperatura con una temperatura de 25 grados y una escala de "F" para convertirla a Fahrenheit, y mostrar el resultado en la consola 
console.log("La temperatura convertida es: " + convertirTemperatura(32, "C")); // Llamar a la función convertirTemperatura con una temperatura de 32 grados y una escala de "C" para convertirla a Celsius, y mostrar el resultado en la consola
console.log(convertirTemperatura("100", "C")); // Llamar a la función convertirTemperatura con una temperatura de "100" (cadena de texto) y una escala de "C" para convertirla a Celsius, y mostrar el resultado en la consola (debería mostrar un mensaje de error porque la temperatura no es un número el "100" es una cadena de texto)
console.log(convertirTemperatura(0, "a")); // Llamar a la función convertirTemperatura con una temperatura de 0 grados y una escala de "a" para convertirla, y mostrar el resultado en la consola (debería mostrar un mensaje de error porque la escala "a" no es válida)

//Resultado de la profesora:
function convertirTemperatura(temperatura, escala){
    if (typeof temperatura !== "number"){
        return "Error: La temperatura debe ser un número";
    }
    if (escala !== "C" && escala !== "F"){
        return "Error: Unidad no válida (utilice C o F)";
    }

    // Conversión
    let resultadoConversion;  //let es una variable de alcance local, solo existe dentro de la función convertirTemperatura
    if (escala === "C"){ //Fahrenheit a Celsius
        resultadoConversion = (temperatura - 32) * 5 / 9;
    } else{
        resultadoConversion = (temperatura * 9 / 5) + 32;
    }
    return resultadoConversion;
}
//Opcional: escala.toLowerCase() o escala.toUpperCase()

console.log(convertirTemperatura(25, "F")); // 77
console.log(convertirTemperatura(32, "C")); // 0
console.log(convertirTemperatura("32", "C")); // Error
console.log(convertirTemperatura(32, "a")); // Error