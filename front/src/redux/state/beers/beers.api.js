import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);

/**
 * @desc: send a post request to api to rate beer
 * @param string beer_id: beer identifier
 * @param integer beer_rate: beer rating
 * @return void
 */
export const postBeerRate = (beer_id, beer_rate) =>  axios.post(`/beers/${beer_id}/rate`, {score: beer_rate});