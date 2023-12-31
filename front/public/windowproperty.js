// windowproperty.js
/* eslint-disable no-undef */
console.log("windowproperty.js is being loaded")
const userAgent = navigator.userAgent.toLowerCase()
const isChrome = userAgent.includes("chrome")
if (isChrome) {
    let messageId = 0
    const messagePromises = {}

    window.addEventListener("message", (event) => {
        const { type, id, response } = event.data
        if (type === "fromEvent") {
            if (messagePromises[id]) {
                messagePromises[id].resolve(response)
                delete messagePromises[id] // Remove this promise
            }
        }
    })

    function postMessageAsync(method, params) {
        const id = messageId++
        const message = { from: "windowproperty", type: "fromClient", id, method, params }
        return new Promise((resolve, reject) => {
            messagePromises[id] = { resolve, reject }
            window.postMessage(message, "*")
        })
    }

    window.abc = {
        request: async ({ method, params }) => {
            return postMessageAsync(method, params)
        },
        chainId: async () => {
            try {
                return postMessageAsync("eth_chainId")
            } catch (error) {
                console.error(error)
            }
        },
        enable: async () => {
            try {
                return postMessageAsync("eth_requestAccounts", [])
            } catch (error) {
                console.error(error)
            }
        },
    }

    console.log("abc.js has been loaded")
}
