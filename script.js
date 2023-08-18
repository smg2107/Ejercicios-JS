//Ejercicios: Nivel 1

//1. Declare una función fullName e imprima su nombre completo.

// function fullName(){
//     nombre = prompt("Ingresa tu nombre completo")
//     document.write(nombre)
// }

// fullName()

/*
2. Declare una función fullName y ahora toma firstName, lastName como parámetro y 
devuelve su nombre completo.
*/

// function fullName(firstName, lastName){
//     firstName = prompt("Ingresa tu nombre")
//     lastName = prompt("Ingresa tu apellido")
//     document.write(firstName+" "+lastName)
// }

// fullName()

//3. Declare una función addNumbers y toma dos parámetros y devuelve suma

// function addNumbers(){
//     num1 = Number(prompt("Ingresa un numero a sumar"))
//     num2 = Number(prompt("Ingresa otro numero"))
//     document.write(num1 + num2)   
// }

// addNumbers()

/*
4. El área de un rectángulo se calcula de la siguiente manera: área = largo x ancho. 
Escribe una función que calcule areaOfRectangle
*/

// function areaOfRectangle(){
//     largo = prompt("Ingrese el largo del rectangulo")
//     ancho = prompt("Ingrese el ancho del rectangulo")
//     document.write(largo*ancho)
// }

// areaOfRectangle()

/*
5. El perímetro de un rectángulo se calcula de la siguiente manera: perímetro = 2x 
(largo + ancho). Escribe una función que calcule el perímetro del rectángulo
*/

// function perRec(){
//     largo = Number(prompt("Ingrese el largo del rectangulo"))
//     ancho = Number(prompt("Ingrese el ancho del rectangulo"))
//     perimetro = 2*(largo + ancho)
//     document.write(perimetro)
// }

// perRec()

/*
6. El volumen de un prisma rectangular se calcula de la siguiente manera: volumen = 
largo x ancho x alto. Escribe una función que calcule el volumenDeRectPrism
*/

// function volumenDeRectPrism(){
//     largo = Number(prompt("Ingrese el largo del rectangulo"))
//     ancho = Number(prompt("Ingrese el ancho del rectangulo"))
//     alto = Number(prompt("Ingrese el alto del rectangulo"))
//     volumen = largo * ancho * alto
//     document.write(volumen)
// }

// volumenDeRectPrism()

/*
7. El área de un círculo se calcula de la siguiente manera: área = π x r x r. Escribe una 
función que calcule areaOfCircle
*/

// function areaOfCircle(){
//     pi = 3,1415926535897932384626433832795028841971693993751058209749445
//     radio = Number(prompt("Ingrese el radio del circulo"))
//     area = pi * radio * radio
//     document.write(area)
// }

// areaOfCircle()

/*
8. La circunferencia de un círculo se calcula de la siguiente manera: circunferencia = 
2πr. Escribe una función que calcule circumOfCircle
*/

// function circumOfCircle(){
//     pi = 3,1415926535897932384626433832795028841971693993751058209749445
//     radio = Number(prompt("Ingrese el radio del circulo"))
//     circunferencia = 2 * pi * radio
//     document.write(circunferencia)
// }

// circumOfCircle()

/*
9. La densidad de una sustancia se calcula de la siguiente manera: densidad = 
masa/volumen. Escribe una función que calcule la densidad
*/

// function denSus(){
//     masa = Number(prompt("Ingrese la masa de la sustancia"))
//     volumen = Number(prompt("Ingrese el volumen de la sustancia"))
//     densidad = masa / volumen
//     document.write(densidad)
// }

// denSus()

/*
10. La velocidad se calcula dividiendo la distancia total recorrida por un objeto en 
movimiento entre el tiempo total empleado. Escribe una función que calcule la 
velocidad de un objeto en movimiento.
*/

// function velocidad(){
//     distancia = Number(prompt("Ingrese la distancia recorrida (Metros)"))
//     tiempo = Number(prompt("Ingrese el tiempo demorado (Minutos)"))
//     velocidad = distancia / tiempo
//     document.write("La velocidad es " + velocidad + " Km/h")
// }

// velocidad()

/*
11. El peso de una sustancia se calcula de la siguiente manera: peso = masa x 
gravedad. Escribe una función que calcule el peso.
*/

// function peso(){
//     masa = Number(prompt("Ingrese la masa de la sustancia"))
//     gravedad = 9.8
//     document.write(gravedad * masa)
// }

// peso()

/*
12. La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) 
+ 32. Escriba una función que convierta °C a °F convertCelsiusToFahrenheit.
*/

// function convC(){
//     c = Number(prompt("Ingrese la temperatura (Centigrados)"))
//     f = (c * 9 / 5) + 32
//     document.write("La temperatura en Farenheit es " + f + " °F")
// }

// convC()

/*
13. El índice de masa corporal (IMC) se calcula de la siguiente manera: bmi = peso en 
Kg / (altura x altura) en m2. Escribe una función que calcule bmi. El IMC se utiliza 
para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más.
Compruebe si una persona tiene un peso inferior al normal, normal, con sobrepeso u
obeso según la información que se proporciona a continuación.
Los mismos grupos se aplican tanto a hombres como a mujeres.
Bajo peso: el IMC es inferior a 18,5
Peso normal: el IMC es de 18,5 a 24,9
Sobrepeso: el IMC es de 25 a 29,9
Obeso: IMC es 30 o más
*/

// function IMC(){
//     peso = Number(prompt("Ingrese su peso (Kg)"))
//     altura = Number(prompt("Ingrese su altura (Metros)"))
//     bmi = peso / (altura * altura)
//    }

// IMC()

//  if(bmi <= 18.5){
//     document.write("Bajo peso");
//     }
//     else if(bmi >= 18.5 && bmi <= 24.9){
//         document.write("Peso normal");
//     }
//     else if(bmi >= 25 && bmi <= 29.9){
//          document.write("Sobrepeso");
//     }
//     else if(bmi >=30){
//         document.write("Obeso");
//     }

/*
14. Escribe una función llamada checkSeason, toma un parámetro de mes y devuelve la
estación: Otoño, Invierno, Primavera o Verano
*/

// function chechSeason(){
//     mes = prompt("Ingrese un mes")
//     if(mes == "septiembre" || mes == "octubre" || mes == "noviembre"){
//         document.write("El mes " + mes + " esta en primavera")
//     }
//     else if(mes == "diciembre" || mes == "enero" || mes == "febrero"){
//         document.write("El mes " + mes + " esta en verano")
//     }
//     else if(mes == "marzo" || mes == "abril" || mes == "mayo"){
//         document.write("El mes " + mes + " esta en otoño")
//     }
//     else if(mes == "junio" || mes == "julio" || mes == "agosto"){
//         document.write("El mes " + mes + " esta en invierno")
//     }
// }

// chechSeason()

/*
15. Math.max devuelve su argumento más grande. Escriba una función findMax que 
tome tres argumentos y devuelva su máximo sin usar el método Math.max.
consola.log(buscarMax(0, 10, 5))
consola.log(buscarMax(0, -10, -2))
*/

function findMax(num1, num2, num3){
    num1 = prompt("Escriba un numero")
    num2 = prompt("Escriba un numero")
    num3 = prompt("Escriba un numero")
    if(num1>num2 && num1>num3){
        console.log("El numero mas grande es " + num1);
    } else if(num2>num1 && num2>num3){
        console.log("El numero mas grande es " + num2);
    } else if(num3>num2 && num3>num1){
        console.log("El numero mas grande es " + num1);
}
}

findMax()