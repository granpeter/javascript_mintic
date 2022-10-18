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