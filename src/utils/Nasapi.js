import axios from 'axios';
import { API_KEY } from './keys.js';

const params = `?api_key=${API_KEY}`;
const paramo = `&api_key=${API_KEY}`;

export async function getApod()   {
  const data = await axios.get(`https://api.nasa.gov/planetary/apod${params}`)
   .catch( error => console.log(error))
   return data.data;
 }
 export async function getImags(rover, sol, camera) {
  const data = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&&page=1&camera=${camera}${paramo}`)
   .catch( error => console.log(error))
  return data.data;
 }
 export async function getEarth() {
  const data = await axios.get(`https://api.nasa.gov/EPIC/api/natural/images${params}`)
   .catch( error => console.log(error))
   return data.data;
 }
export async function getQuery(q) {
  const data = await axios.get(`https://images-api.nasa.gov/search?q=${q}`)
   .catch(error=> console.log(error))
   return data.data;
  }