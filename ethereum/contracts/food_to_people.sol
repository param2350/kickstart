pragma solidity ^0.4.26;


contract CactoryProduce {
    
    mapping(uint => address) deployedProduces;
    
    function createProduce(uint timestamp) public {
        address newProduce = new Produce(msg.sender);
        deployedProduces[timestamp] == newProduce;
    }
    
    
}

contract Produce {
    
    address public farmer;
    uint public status;
    
    struct f2p {
        string id;
        string crop;
        uint amt;
        string fertilizer;
        string organic;
        string quality_expert;
        string date;
    }
    
    struct p2r {
        string r_id;
        address r_address;
        string date;
        uint qty;
        uint status;
    }
    
    p2r[] public p2rs;
    
    
    constructor(address creator) public {
        farmer = creator;
    }
    
    function farmer_to_producer(string id, string crop, unit amt, string feriliser, string organic, string quality_expert, string date) public {
        status = 1;
        f2p({
            id: id,
            crop: crop,
            amt: amt,
            fertilizer: fertilizer,
            organic: organic,
            quality_expert: quality_expert,
            date: date
        });
        
        
    }
    
    function producer_recieved() public {
        status = 2;
        
        
    }
    
    function producer_to_retailer() public {
        
        p2r memory new_p2r = p2r({
            r_id: r_id,
            r_address: r_address,
            date: date,
            qty: qty,
            status: 1
        });
        
        p2rs.pusg(new_p2r);
        
    }
    
    function retailer_recieved() public {
        
    }
}







