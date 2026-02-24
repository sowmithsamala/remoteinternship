import axios from 'axios'

const api = axios.create({ baseURL: '/api' })

// For the frontend-only mock, intercept requests to /api and route to local handlers (if no backend)
// In production, set real backend origin via environment variables.

export default api
