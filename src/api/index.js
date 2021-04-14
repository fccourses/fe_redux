import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createHero = data => {
  const responsePromise = httpClient.post('/superheroes', data);
  return responsePromise;
};
