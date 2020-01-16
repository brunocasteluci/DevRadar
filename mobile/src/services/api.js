import axios from 'axios';

function api() {
  const baseURL = 'http://192.168.100.63:3333';

  return axios.create({ baseURL });
}

export default api();
