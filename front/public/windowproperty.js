/* eslint-disable no-undef */

console.log("windowproperty.js is being loaded")

let messageId = 0
const messagePromises = {}

window.addEventListener("message", (event) => {
    console.log(event)
    if (event.data.from === "responseAccount") {
        messagePromises[event.data.id].resolve(event.data.response)
        delete messagePromises[event.data.id]
    }
})

function postMessageAsync(method, params) {
    const id = messageId++
    const message = { from: "ClientPage", id, method, params }
    return new Promise((resolve, reject) => {
        messagePromises[id] = { resolve, reject }
        window.postMessage(message, "*")
    })
}

window.abc = {
    request: async (method, params) => {
        console.log("request", method, params)
        return postMessageAsync(method, params)
    },
    chainId: async () => {
        return postMessageAsync("eth_chainId")
    },
    // enable: async () => {
    //     return postMessageAsync("eth_accounts")
    // },
}

console.log("abc.js has been loaded")
