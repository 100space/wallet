/* eslint-disable no-undef */

console.log("windowproperty.js is being loaded")

let messageId = 0
const messagePromises = {}

window.addEventListener("message", (event) => {
    const { type, id, response } = event.data
    if ((type === "res", id in messagePromises)) {
        console.log(response, "messagePromises")
    }
})

function postMessageAsync(method, params) {
    const id = messageId++
    const message = { type: "req", id, method, params }
    return new Promise((resolve, reject) => {
        messagePromises[id] = { resolve, reject }
        window.postMessage(message, "*")
    })
}

window.abc = {
    request: async ({ method, params }) => {
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
