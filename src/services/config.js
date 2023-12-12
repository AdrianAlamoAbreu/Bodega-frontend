import axios from 'axios'

const app = axios.create({
  baseURL: "http://localhost:5173/",
});

export default app