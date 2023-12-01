
import axios from "axios";

const baseURL = 'https://url-short-8pbk.onrender.com/api';

const authInstance = axios.create({
  baseURL: baseURL,
});
const protecdInstance = axios.create({
  baseURL:baseURL
})
protecdInstance.interceptors.request.use(config => {
  const User = sessionStorage.getItem('User');
  if (User) {
    const authToken = JSON.parse(User).token;
    config.headers['Authorization']=`Bearer ${authToken}`
  }
  return config;
})

export {authInstance,protecdInstance}