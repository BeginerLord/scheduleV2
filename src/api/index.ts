import axios from "axios"

const { VITE_API_URL, VITE_SECRET_KEY } = import.meta.env;

export const scheduleApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "api-key": VITE_SECRET_KEY,
  },
});
scheduleApi.interceptors.request.use(
  (config: any) => {
    // Obtener el token directamente del localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Configurar el header de autorización si el token es válido
      config.headers.Authorization =`Bearer${token}`;
    }

    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);