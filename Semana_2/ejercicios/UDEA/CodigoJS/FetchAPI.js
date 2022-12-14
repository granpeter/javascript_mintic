const apiKey = '3wTLC3CMiQpNDRTsg05mKpa0xrtCSNda';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        
        const { webp_size }= data.images.original
        const h1= document.createElement('h1');
        h1.innerHTML=webp_size;
        document.body.append(h1)

    })
    .catch('error'+console.warn);

/*/Async */
const getImagenPromesa = () => {
    const promesa = new Promise((resolve, reject) => {
        resolve('https://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg')
    })
    return promesa;
}
getImagenPromesa().then(console.log);


const getImagen = async() => {
    return('https://2.bp.blogspot.com/-3d92ta4_JEc/TvmzTTgNBKI/AAAAAAAACJ4/GFC9bCwM5vQ/s1600/imagenes-jpg-712861.jpg')
    }
    getImagen().then(console.log);
      
//Await 
  

const getImagenSync = async()=> {
        const apiKey = '3wTLC3CMiQpNDRTsg05mKpa0xrtCSNda';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await resp.json();

        console.log(data)
    };
    getImagenSync();
    