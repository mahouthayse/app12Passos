import axios from 'axios';

const api = axios.create({ baseURL: 'https://some-tcc-api.herokuapp.com/v1' })

// const Config = config => {
  // const userToken = localStorage.getItem('authorization');
  // if (userToken) config.headers.Authorization = `Bearer ${userToken}`;
  // return config;
// }

// api.interceptors.request.use(Config);

export default api;