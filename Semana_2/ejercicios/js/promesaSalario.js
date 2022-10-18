import {busquedaPorSalario} from './main';

const busquedaPorSalarioMinimo = (salarioMinimo) => {
     //funcion promesa ( funcion resolucion , funcion rechazo)                  
    return new Promise((resolve, reject) => {
                  
            const tripulante= busquedaPorSalario(salarioMinimo);
            if (tripulante){ // si retorno un salario con el valor del minimo
                resolve (tripulante);// invoco función de resolución
            }else{
                reject ('No se encontro un tripulante con salario minimo');// invoco la función de rechazo

            }

        


    });


}// fin de la función busquedaPorSalarioMinimo

// invocar busquedaporSalarioMinimo

busquedaPorSalarioMinimo (1000000)
.then ( tripulante => console.log ('tripulante:',tripulante)) // captura la función resolve o de resolución
.catch( err => console.warn(err)) // captura la funcion reject  o de rechazo