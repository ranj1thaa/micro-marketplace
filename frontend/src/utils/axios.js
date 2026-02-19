import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3000"|| "https://micro-marketplace-odja.onrender.com/",
  withCredentials: true
});

console.log("Axios base URL:", import.meta.env.VITE_BASE_URL)
export default api