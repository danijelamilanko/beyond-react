import axios from 'axios';

export default {
    user: {
        login: (credentials) => axios.post('/api/auth', {credentials}).then(res => res.data.user)
    },
    jobs: {
        fetchAll: () => axios.get("/api/jobs").then(res => res.data.jobs),
        fetchAllAuth: () => axios.get("/api/authjobs").then(res => res.data.jobs),
        create: job => axios.post("/api/authjobs", {job}).then(res => res.data.job)
    }
}