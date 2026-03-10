function convertirTemperatura(temperatura, escala) {   // La función toma una temperatura y la escala a la que se desea convertir ("C" para Celsius o "F" para Fahrenheit)         
    let resultado;  // Variable para almacenar el resultado de la conversión

    if (escala === "C") {  // Si la escala es "C", se convierte de Fahrenheit a Celsius usando la fórmula (F - 32) * 5/9
        resultado = (temperatura - 32) * 5 / 9;  // Si la escala es "F", se convierte de Celsius a Fahrenheit usando la fórmula (C * 9/5) + 32
    } else if (escala === "F") {  // Si la escala es "F", se convierte de Celsius a Fahrenheit usando la fórmula (C * 9/5) + 32
        resultado = (temperatura * 9 / 5) + 32;  // Si la escala no es válida, se asigna un mensaje de error al resultado
    }   // Si la escala no es válida, se asigna un mensaje de error al resultado
    return resultado;  // Se devuelve el resultado de la conversión
}

document.getElementById("btnCalcularConversion").addEventListener("click", function(event) {  // Se agrega un evento de clic al botón "Calcular Conversion"
    event.preventDefault();  // Se previene el comportamiento predeterminado del botón (enviar el formulario)


    const centigrados = parseFloat(document.getElementById("txtCentigrados").value);  // Se obtiene el valor ingresado en el campo de texto para centígrados y se convierte a un número de punto flotante
    const fahrenheit = parseFloat(document.getElementById("txtFahrenheit").value);  // Se obtiene el valor ingresado en el campo de texto para Fahrenheit y se convierte a un número de punto flotante
    
    let resultadoConversion = "";  // Variable para almacenar el resultado de la conversión que se mostrará en la página

    if (!isNaN(centigrados)) {  // Si el valor ingresado para centígrados no es un número, se realiza la conversión a Fahrenheit y se agrega al resultado de la conversión
        const fahrenheitConvertido = convertirTemperatura(centigrados, "C");  // Si el valor ingresado para Fahrenheit no es un número, se realiza la conversión a Celsius y se agrega al resultado de la conversión
        resultadoConversion += `${centigrados} °C = ${fahrenheitConvertido.toFixed(2)} °F<br>`;  // Se agrega el resultado de la conversión a Fahrenheit al resultado de la conversión, formateando el número a dos decimales
    }   
    if (!isNaN(fahrenheit)) {
        const centigradosConvertido = convertirTemperatura(fahrenheit, "F");  //
        resultadoConversion += `${fahrenheit} °F = ${centigradosConvertido.toFixed(2)} °C<br>`;  // Se agrega el resultado de la conversión a Celsius al resultado de la conversión, formateando el número a dos decimales
    }
    document.querySelector("section p").innerHTML = resultadoConversion;  // Se muestra el resultado de la conversión en el párrafo dentro de la sección, utilizando innerHTML para permitir el formato HTML (como los saltos de línea)
}
);