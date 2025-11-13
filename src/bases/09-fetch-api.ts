import type { GIFResponse } from "../data/interfaces/gif.responses";




const apiKey = 'q4aDNyOUBXbZY60iGC7oCEegLQoISrMj';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then((body: GIFResponse) => {
        console.log(body.data.images.downsized_medium.url)
    })
    .catch(err => console.info(err));