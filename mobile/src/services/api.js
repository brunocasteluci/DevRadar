import axios from 'axios';

function api() {
  const baseURL = '<Server URL >';

  return axios.create({ baseURL });
}

export default api();
