import axios from 'axios';

// Configuration de base pour l'API
const apiClient = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour les requêtes
apiClient.interceptors.request.use(
  config => {
    // Ici on pourra ajouter l'auth token plus tard
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Intercepteur pour les réponses
apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // Gestion centralisée des erreurs
    if (error.response) {
      // Erreur avec réponse du serveur
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Erreur de réseau
      console.error('Network Error:', error.request);
    } else {
      // Autre erreur
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
