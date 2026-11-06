import axios from "axios"
import { error } from "console"

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  headers: {
    "Content-Type": "aplication.json",
  },

  timeout: 10000,
})

axiosClient.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)
