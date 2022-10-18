/*//Importación normal
import {heroes} from './datos/data.js';

console.log(heroes);
np

//Importación por defecto 

console.log(heroes);
*/
//Import/ export individual 

//import heroes, {owner} from './datos/data.js';
import heroes from './datos/data.js';


//Find
 export const getHeroeById = (id)=>{
    return heroes.find(( heroe )=> heroe.id == id);
  }
   console.log("busque Heroe por codigo 5:"+getHeroeById(5).name);
 
 //Filter
    const getHeroeByOwner = ( owner )=> heroes.filter(( heroe ) => heroe.owner == owner);
    
    
   console.log(getHeroeByOwner('DC'));

   const filterHeroeById = ( id )=> heroes.filter(( heroeobj ) => heroeobj .id == id);
   console.log(filterHeroeById(2));


