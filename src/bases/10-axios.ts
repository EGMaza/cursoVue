import axios from "axios";
import type { GIFResponse } from "../data/interfaces/gif.responses";

const apiKey = 'q4aDNyOUBXbZY60iGC7oCEegLQoISrMj';

export const giphyAPI = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey,
    }
});

// export default giphyApi

giphyAPI.get<GIFResponse>('/random')
    .then(resp => console.log(resp.data.data.images.downsized_medium.url))
    .catch(err => console.log(err));