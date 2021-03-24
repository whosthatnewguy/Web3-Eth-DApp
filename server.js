// type - node script.js to run
// install web3 package before running with npm install Web3

// require the web3 library
const Web3 = require('web3');

// eth api key endpoint
const url = '#####'

// create new web object and connecting to eth api endpoint
const web3 = new Web3(Web3.givenProvider || url);

// connect to individual eth node from https://etherscan.io/
// var address = '#####'

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
