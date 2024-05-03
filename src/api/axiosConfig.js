import axios from 'axios';

export const BASE = 'http://192.168.0.102:4000/api';

const instance = axios.create({
  baseURL: BASE,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default instance;
