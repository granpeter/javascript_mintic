// 1. función por declaración
function sumar (numero1,numero2){
  
    let resultado;
    resultado=numero1+numero2;
    console.log("El resultado por declaración de sumar núm1:"+numero1+"+ num_2:"+numero2+ " es: "+resultado);
  }

  sumar(4,5);
  sumar(3,5);

// 2. funcion por Expresión
const suma = function sumar(numero1,numero2){
    let resultado;
    resultado=numero1+numero2;
    console.log("El resultado por expresión de sumar núm1:" +numero1+ "+ num_2:" +numero2+  " es: "+resultado);
    return resultado; 
}

console.log("imprima invocación por constante:"+suma)//invocación por nombre de constante
console.log ("imprima invocación por ejecución de funcion:"+suma(4,7))// invocación al valor de la función


//3. funcion anonima 
const sumanonima = function (numero1,numero2){
 
    let resultado;
    resultado=numero1+numero2;
    console.log("El resultado anónimo de sumar núm1:" +numero1+ "+ num_2:" +numero2+  " es: "+resultado);
    return resultado; 
}

console.log("imprima invocación por constante anónima:"+sumanonima )//invocación por nombre de constante
console.log ("imprima invocación por ejecución de funcion anónima:"+sumanonima (9,10))// invocación al valor de la función


//4. función constructora o por Objeto
function ConstructorSuma (numero1,numero2){
    this.numero1=numero1;
    this.numero2=numero2;
    this.resultado=numero1+ numero2;
    this.resultadoDivision=numero1/numero2;
    this.resta=numero1-numero2;
     
}
let sumatoria= new ConstructorSuma (4,6);
console.log(" imprima numero1:"+sumatoria.numero1);
console.log(" imprima numero2:"+sumatoria.numero2);
console.log(" imprima resultado:"+sumatoria.resultado)
console.log(" imprima resultado de division:"+sumatoria.resultadoDivision)

console.log(" imprima resultado de la resta:"+sumatoria.resta)

let sumatoria2 = new ConstructorSuma (20,60)
console.log(" imprima numero1 de sumatoria2 :"+sumatoria2.numero1);
console.log(" imprima numero2 de sumatoria2:"+sumatoria2.numero2);
console.log(" imprima resultado de sumatoria2:"+sumatoria2.resultado)
console.log(" imprima resultado de division de sumatoria2:"+sumatoria2.resultadoDivision)
console.log(" imprima resultado de la resta de sumatoria2:"+sumatoria2.resta)

//5. función tipo de flecha
let sumatoriaFlecha = (numero1,numero2) => {
     let resultado = numero1+numero2;
     return resultado;
};

console.log(" imprima resultado de sumatoria Flecha:"+sumatoriaFlecha(8,9));




// 7. función clausura
// Clausura: Función incrementar()
const incrementar = (function () {
    let num = 10;// declaración de variable solo se ejecuta la primera vez
    return function () {
      num= num+10;
      return num;
    };
  })();

console.log("Incremento al llamar la primera vez :"+incrementar());
console.log("Incremento al llamar la segunda vez :"+incrementar());
console.log("Incremento al llamar la tercera vez :"+incrementar());

//8. función de tipo CallBack
const segundaFuncion = function(){
    let variable=10;
	console.log("SEGUNDA ---- FUNCION----EJECUTADAD------."+variable);
    variable=variable+10;
};
 
const primeraFuncion = function(callback){
	callback(); // invocando a la 2daFunción
};
 
primeraFuncion(segundaFuncion); // Segunda función ejecutada.
primeraFuncion(segundaFuncion);
primeraFuncion(segundaFuncion);



