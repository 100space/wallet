import axios from "axios"

const requestServer = axios.create({
    baseURL:
        process.env.REACT_APP_MODE === "local"
            ? process.env.REACT_APP_LOCAL_SERVER
            : process.env.REACT_APP_MODE === "dev"
            ? process.env.REACT_APP_DEV_SERVER
            : process.env.REACT_APP_MAIN_SERVER,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
})

export default requestServer
