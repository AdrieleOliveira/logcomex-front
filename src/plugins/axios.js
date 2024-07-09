import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Substitua com sua URL base
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;