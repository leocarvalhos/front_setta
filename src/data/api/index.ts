import axios from 'axios';
export const instance =  axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 120000,
    headers: { 'Content-Type': 'application/json' },
});