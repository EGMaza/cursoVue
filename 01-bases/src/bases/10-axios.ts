import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = 'HuBMNXNAZdAXtuUST0Sw5M4ZXfBjoCyv';

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

//giphyAPI.get<GIFResponse>('/random')
//    .then( resp => console.log(resp.data.data.images.downsized_large.url))
//    .catch( err => console.log(err));