const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");
// require('dotenv').config();

const provider = new HDWalletProvider(
  "burst forget poverty service denial notice soccer refuse old oven update rough",
   "https://rinkeby.infura.io/v3/a3daec918b854d149fe84e5b4e729a84"
); 
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface) 
  )
    .deploy({ data: "0x" + compiledFactory.bytecode })
    .send({ gas: "2000000", from: "0x57ca05253204B82Df58C63411a293265392CD6C0" });

  

  console.log("contract deployed at ", result.options.address);
};
deploy();
