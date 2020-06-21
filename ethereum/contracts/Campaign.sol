pragma solidity ^0.4.26;


contract CampaignFactory{
    address[] public deployedCampaigns;

    function createCampaign(uint minimum, string title, string description, string img) public {

        address newCampaign = new Campaign(minimum, msg.sender, title, description, img);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
        struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;
    string public Title;
    string public Description;
    string public Img;

    modifier restricted() {
        require(msg.sender == manager,"sender is not authenticated");
        _;
    }


     function getDetails() public view returns (
       string, string, string
   ) {
       return (
           Title,
           Description,
           Img

       );


   }


    constructor(uint minimum, address creator, string title, string description, string img) public {
        manager = creator;
        minimumContribution = minimum;
        Title = title;
        Description = description;
        Img = img;

    }

    function contribute() public payable {
        require(msg.value > minimumContribution, 'minimum contribution not met');
        approvers[msg.sender] = true;
        approversCount++;

        }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);

    }

    function approveRequest(uint index) public {

        Request storage request = requests[index];
        require(approvers[msg.sender], 'person is not authentic apprrover');
        require(!request.approvals[msg.sender], 'user has already approved');
        request.approvals[msg.sender] == true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {

        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2), 'approval count is not enough');
        require(!request.complete, 'request is not complete');
        request.recipient.transfer(request.value);
        request.complete = true;

   }

   function getSummary() public view returns (
       uint,uint,uint,uint,address
   ) {
       return (
           minimumContribution,
           address(this).balance,
           requests.length,
           approversCount,
           manager

       );


   }

   function getRequestCount() public view returns (uint) {
       return requests.length;
   }

}