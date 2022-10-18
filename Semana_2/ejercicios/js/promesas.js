import { busquedaPorId } from "./main";

const busquedaPorIDAsync = (id) => {

return new Promise ((resolve, reject) => {
    setTimeout(() => {
        const p= busquedaPorId(id);

        if (p){
            resolve(p)
        }else{
            reject ('no se cumplio la promesa - no encontró el tripulante');  
        }

    }, 2000);

});

}

busquedaPorIDAsync(11)
.then (tripulante => console.log ('tripulante',tripulante))
.catch(err => console.warn(err))