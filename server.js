// type - node script.js to run
// install web3 package before running with npm install Web3

// require the web3 library
const Web3 = require('web3');

// eth api key endpoint
const url = 'https://1q8e5OYcJFN3yGuZ5dGxg9cClqx:b0c76a22ffa36590716d9044c2cfad2a@eth2-beacon-mainnet.infura.io'

// create new web object and connecting to eth api endpoint
const web3 = new Web3(Web3.givenProvider || url);

// connect to individual eth node from https://etherscan.io/
// var address = '0xb105608D0Fb6FEC617AfDD7D5147Aa7Ab7a86612'

// // web3.eth allows us to interact with eth network functions
// // callback arrow function takes error and balance
// var readBal = web3.eth.getBalance(address,(err, bal) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(bal.toString)
// });

// console.log(readBal);
console.log(web3);