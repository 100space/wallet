/* eslint-disable no-undef */

console.log("windowproperty.js is being loaded")

window.abc = {
    request: function (method, params) {
        console.log("windowproperty.js에서의 메시지:", method, params)
        window.postMessage({ from: "clientPage", method, params }, "*")
    },
}

console.log("abc.js has been loaded")
