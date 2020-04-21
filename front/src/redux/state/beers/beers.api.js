import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const putBeer = beer => axios.put(`/beers/${beer.uuid}`, beer);