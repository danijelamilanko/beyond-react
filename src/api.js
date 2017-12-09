import axios from 'axios';

export default {
    user: {
        login: (credentials) => axios.post('/api/auth', { credentials }).then(res => res.data.user)
    },
    items: {
        fetchAll: () => axios.get("/api/items").then(res => res.data.items),
    }
}