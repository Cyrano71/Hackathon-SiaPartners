// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


//addNotary 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
//addToken smartContract(0xEf9f1ACE83dfbB8f559Da621f4aEA72C6EB10eBf) , 1
//balanceOf 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
//transferFunds 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, [[0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 1]]

contract EntryPoint {

    struct Token {
        address erc20;
        uint256 amount;
    }

    mapping (address => Token[]) userTokens;

    mapping (address => bool) notaries;

    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier ownerOnly(){
        require(owner == msg.sender);
        _;
    }

    modifier notaryOnly(){
        require(notaries[msg.sender]);
        _;
    }

    function addNotary(address notary) external ownerOnly {
        notaries[notary] = true;
    }

    function addToken(address token, uint256 amount) external {
        Token[] storage tokens = userTokens[msg.sender];
        tokens.push(Token(token, amount));
    }

    struct Allowance {
        address token;
        uint256 value;
    }

    function balanceOf(address from) external view notaryOnly returns (Token[] memory) {
        Token[] memory tokens = userTokens[from];
        return tokens;
    }

    struct Transfer {
        address heir;
        uint256 amount;
    }

    function transferFunds(address from, Transfer[] calldata to) external notaryOnly {
        Token[] memory tokens = userTokens[from];
        uint256 length = tokens.length;
        uint256 nbHeirs = to.length;
        for (uint256 i = 0; i < length; i++) 
        {   
            for (uint256 j = 0; j < nbHeirs; j++) 
            {
                IERC20(tokens[i].erc20).transfer(to[i].heir, tokens[i].amount);
            }  
        }
    }
}