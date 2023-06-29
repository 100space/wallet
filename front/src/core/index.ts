import Web3 from "web3"
const web3 = new Web3("https://polygon-mumbai.infura.io/v3/fe6fb1e940ac43ea956b72a82103f2ad")

console.log(web3.currentProvider)
web3.setProvider("https://mainnet.infura.io/v3/fe6fb1e940ac43ea956b72a82103f2ad")

console.log(web3.currentProvider)
