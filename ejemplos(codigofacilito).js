/*console.log("Hola Mundo"); escribes en la terminal 
alert("Hola") //es una utilidad*/

//prompt("Dame tu nombre: "); *solo se puede hacer en un navegador

//javascript es interpretado a diferencia de C/C++ que es compilado
//let - var edad
let nombre = "juan";
const pi = 3.1416;
console.log(nombre,pi);

let edad = 21;
let cambio = 2.30;

// Booleano true / false
//ciclos / condiciones

let activo = Boolean();
console.log(activo);

//8 operadores de comparacion
/*
    == igual
    === estrictamente igual

    != desigualdad 
    !== desigualdad estricta

    < menos que 
    > mayor que

    +
    >= mayor o igual que
    <= menor o igual que
*/
/*  
   && AND
   || OR
   ! NOT
   ?? operador NULLISH coalescing // fusion de nulos
*/
  console.log( edad > 10  && edad < 25)

  if(edad > 18){
    console.log( ":)" );
}else{
    console.log(":(");
}

//imprimir los numero de 1 al 10
/*
    1.instruccion inicial
    2. Condicion
    3. Instruccion despues de cada iteracion


for(i = 1; i<=10; i++){
    console.log(i);
}
*/
let i = 1;
while(i =10){
    console.log("Hola")
    break;
}

/* FUNCIONES */
function saludar(){
    /*el codigo que se ejecuta*/ 
    console.log("Hola Juan")
}
function cuadrado(numero){
    return numero*numero;
}

saludar();
let cuadrado_de_dos = cuadrado(2);
console.log(cuadrado_de_dos);
console.log(cuadrado(3))

/*SCOPE*/
let nombredos = "juand";
decirHola();
function decirHola(nombredos){
    console.log("Hola "+ nombredos);
}
decirHola(nombredos);
/////////////////////////////////////
function cuadrado(numero){
    return numero*numero;
}

let resultado = cuadrado();
console.log(resultado);

function sumatodos(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++)
    {
       suma += arguments[i]
    }
    console.log(suma);
}

sumatodos(1,2,3,4,5)

////////////////////////////////////// 
let anio = 2020;
function modificador(anio){
    anio = 2023;
    console.log("Dentro de la funcion: " + anio);
}

console.log(anio);
modificador(anio);
console.log(anio);

/*First class object*/

return 2;
