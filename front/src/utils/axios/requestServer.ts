import axios from "axios"

const requestServer = axios.create({
    baseURL: "http://localhost:3005",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default requestServer
