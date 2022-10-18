
let x=11;// ASIGNANDO UN VALOR A VARIABLE
/*
console.log ('1. PRoceso Iniciado...'); //IMPRIMIENDO EN CONSOLA
setTimeout(() => {
    x=x*3+2; //MULTIPLICACION
    console.log('2. proceso terminado...');
}, 4000);

console.log ('3. el resultado es ....'+x);
*/



// segunda aplicación de promesas
const promesa = new Promise((resolve, reject) => {
    //obtenerCodigoDian()
    setTimeout(() => {
        x = x * 3 + 2;
        console.log('2. proceso calculado...');
      if (x>32){ 
        resolve(x)// llamo callback indicando que ya se resolvio y le mando como parametro la respuesta
      }else{
         reject('fallo promesa');
      }
    }, 4000);
})


console.log ('1. PRoceso Iniciado');
promesa.then( res=>{  // si la promesa se cumple
      console.log('3. el resultado es:'+ res);
  })
  promesa.catch('fallo la promesa');

 