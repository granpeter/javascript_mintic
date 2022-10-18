let x =10;
console.log ('1. proceso iniciado');

setTimeout(() => {
    x=x*3+2;
    console.log('2. proceso terminado')

}, 3000);

console.log(" 3. el resultado asincrono de x="+x);