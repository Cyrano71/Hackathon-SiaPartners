// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LegasiV0 {

    mapping (address => address[]) userTokens;

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

    function isNotary(address notary) external view ownerOnly returns (bool result) {
        return notaries[notary];
    }

    function transferToNotary(address token, address notary) external {
        address[] storage tokens = userTokens[msg.sender];
        tokens.push(token);
        IERC20(token).approve(notary, 10000 * 1e18);
    }

    struct Balance {
        address erc20;
        uint256 value;
    }

    function balanceOf(address from) external view notaryOnly returns (Balance[] memory) {
        address[] memory tokens = userTokens[from];
        uint256 length = tokens.length;
        Balance[] memory balances = new Balance[](length);
        for (uint256 i = 0; i < length; i++) 
        {   
            address token = tokens[i];
            balances[i] = Balance(token, IERC20(token).balanceOf(from));
        }
        return balances;
    }

    struct Transfer {
        address heir;
        uint256 amount;
    }

    function transferFunds(address from, Transfer[] calldata to) external notaryOnly {
        address[] memory tokens = userTokens[from];
        uint256 length = tokens.length;
        uint256 nbHeirs = to.length;
        for (uint256 i = 0; i < length; i++) 
        {   
            for (uint256 j = 0; j < nbHeirs; j++) 
            {
                IERC20(tokens[i]).transfer(to[i].heir, to[i].amount);
            }  
        }
    }
}