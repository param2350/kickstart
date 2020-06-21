import Web3 from 'web3';
// require('dotenv').config();


let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser and  metamask injected
    web3 = new Web3(window.web3.currentProvider);
    console.log("inside");

}
else {
    // we are on server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/a3daec918b854d149fe84e5b4e729a84"

    );

    web3 = new Web3(provider);
    console.log("outside----------------------------");


}
export default web3;