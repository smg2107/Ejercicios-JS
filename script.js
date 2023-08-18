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

function convC(){
    c = Number(prompt("Ingrese la temperatura (Centigrados)"))
    f = (c * 9 / 5) + 32
    document.write("La temperatura en Farenheit es " + f + " °F")
}

convC()