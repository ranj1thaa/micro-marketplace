import axios from 'axios'

console.log("BASE URL:", import.meta.env.VITE_BASE_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "https://micro-marketplace-odja.onrender.com/",
  withCredentials: true
});

console.log("Axios base URL:", import.meta.env.VITE_BASE_URL)
export default api