import axios from 'axios';

const api = axios.create({
  baseURL: '<Server URL >'
});

export default api;
