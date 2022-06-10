//Las Variables
//Identificadores (nombre de las variables)

//- Tienen que comenzar por letra o símbolo $ o símbolo _
//- No se pueden usar las palabras reservadas del lenguaje

// - buenas prácticas : utilizar camelCase
// - buena práctica utilizar nombres semánticos 

//Declaración de variables en JavaScript (ECMAScript 6):
let primerApellido; 


//Asignación de valores a las variables
primerApellido = 'López'; 

primerApellido = 'Fernández';


console.log(primerApellido);

//Inicialización de variables (declarar y asignar por primera vez)
let telefono = '+349874587';
console.log (telefono);

// Se pueden declarar varias variables a la vez
let email, codigoPostal, localidad; //separado por comas

//Constantes
//Similar a variables pero no modifican su valor durante la ejecucuión del programa

const endPoint = 'http://cloud/api'; 
//endPoint = 'otro valor'; retornaría error


// El uso de let y const es relativamente reciente ya que pertenece a la especificación ECMAScript 6
//Modo clásico anterior a 2015-2018 con palabra reservada var
var nombre;
nombre = 'Juan';
var ciudad = 'Caceres';

//No había constantes asi que para declararlas se usaba como convención su identificador en mayúsculas
var ENDPOINT ='HTTP//...';

//Existe una forma de declarar variables que es mala práctica sin palabra reservada
numeroPasaporte ='788994423694'; //forma global y es mala práctica