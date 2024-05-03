import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.101:4000', 
});

export default instance;
