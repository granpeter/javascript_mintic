// palabra clave + nombre estructura datos + ubicación del archivo con los datos
import tripulantes  from './datos/data.js'; //importando un arreglo de objetos

// export const nombreFuncion = (listaParametro) =>^{ cuerpo de la función.}            
export const busquedaPorId = (paramID) => {
         //arreglo_objeto.find ( (nombre_objeto resultante)) ==> c/u obj arreglo == parametro de la función
  return tripulantes.find((objTripulante)=> objTripulante.id==paramID)

}// fin de la función busqueda por id
// export const nombreFuncion = (listaParametro) =>^{ cuerpo de la función.}  
export const busquedaPorSalario = (paramSalario)=>{
    //                     tipo de objeto --> crieterio de comparación                        
    //arreglo_objeto.find ( (nombre_objeto resultante)) ==> c/u obj arreglo == parametro de la función
    return tripulantes.find(  (objTripulante) => objTripulante.salario==paramSalario   )
}


/*
console.log("El tripulante con ID 3 es:",busquedaPorId(3));

// busqueda de tripulante por salarios
console.log(' El tripulante con salario 67878 es:',busquedaPorSalario(67878));

// filtre y ordene por nombres
// const nombreFuncion = ( parametro  => arregloObjetos.filter  ( (objtripulante) )  )
const filtreSalario = ( paramSalario ) => tripulantes.filter((objtripulante) => objtripulante.salario == paramSalario);
console.log('objetos',filtreSalario (600000));

// filtre todos los objetos de diferente id
const filtreID = (paramID) => tripulantes.filter ( (tripulante) => tripulante.id != paramID);
console.log('objeto con id != 2', filtreID (2));
*/
