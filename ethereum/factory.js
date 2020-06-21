import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x3912d38d4255B7D47A7F601f1e08F517e18BcB30'
        
)

export default instance;