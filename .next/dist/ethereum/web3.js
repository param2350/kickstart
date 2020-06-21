'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('dotenv').config();


var web3 = void 0;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser and  metamask injected
    web3 = new _web2.default(window.web3.currentProvider);
    console.log("inside");
} else {
    // we are on server or user is not running metamask
    var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/a3daec918b854d149fe84e5b4e729a84");

    web3 = new _web2.default(provider);
    console.log("outside----------------------------");
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUNBOzs7QUFHQSxJQUFJLFlBQUo7QUFDQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLE9BQU8sQUFBZCxTQUF1QixBQUEzRCxhQUF3RSxBQUNwRTtBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtZQUFRLEFBQVIsSUFBWSxBQUFaLEFBRUg7QUFMRCxPQU1LLEFBQ0Q7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFLQTs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0E7WUFBUSxBQUFSLElBQVksQUFBWixBQUdIO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkU6L1ByYWN0aWNlL2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=