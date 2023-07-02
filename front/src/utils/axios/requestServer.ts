import axios from "axios"

const requestServer = axios.create({
    baseURL: "http://127.0.0.1:3005",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default requestServer
