import axios from 'axios'

const app = axios.create({
  baseURL: "https://bodega-backend-production.up.railway.app/api",
});

export default app