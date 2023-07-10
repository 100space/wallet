// windowproperty.js
/* eslint-disable no-undef */
console.log("windowproperty.js is being loaded")

let messageId = 0
const messagePromises = {}

window.addEventListener("message", (event) => {
    const { type, id, response } = event.data
    console.log(event.data, "messagePromises")
    if (type === "res") {
        if (messagePromises[id]) {
            messagePromises[id].resolve(response)
            delete messagePromises[id] // Remove this promise
        }
    }
})

function postMessageAsync(method, params) {
    const id = messageId++
    const message = { type: "req", id, method, params }
    return new Promise((resolve, reject) => {
        messagePromises[id] = { resolve, reject }
        window.postMessage(message, "*")
        console.log(message)
        console.log(messagePromises)
    })
}

window.abc = {
    request: async ({ method, params }) => {
        console.log("request", method, params)
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
        if (!window.abc._sentWarnings) {
            window.abc._sentWarnings = {}
        }
        if (!window.abc._sentWarnings.enable) {
            console.warn("enable function is deprecated")
            window.abc._sentWarnings.enable = true
        }

        try {
            return postMessageAsync("eth_requestAccounts", [])
        } catch (error) {
            console.error(error)
        }
    },
}

console.log("abc.js has been loaded")
