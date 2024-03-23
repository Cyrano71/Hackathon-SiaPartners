// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LegasiV0 {
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

    function isNotary(address notary) external view ownerOnly returns (bool result) {
        return notaries[notary];
    }

    ///////////////////DEAD MAN/////////////////////////////
    struct Balance {
        address erc20;
        uint256 value;
    }
    mapping (address => Balance[]) deadManBalance;
    function addBalance(address token, uint256 amount) external {
        Balance[] storage balances = deadManBalance[msg.sender];
        balances.push(Balance(token, amount));
    }

    ///////////////////OWNER/////////////////////////////
    mapping (address => bool) notaries;

    function addNotary(address notary) external ownerOnly {
        notaries[notary] = true;
    }

    function transferFunds(address deadMan) external ownerOnly {
        Dispatch[] storage dispatch = heritageDispatch[deadMan];
        uint256 length = dispatch.length;
        for (uint256 i = 0; i < length; i++) 
        {   
            IERC20(dispatch[i].token).transfer(dispatch[i].heir, dispatch[i].amount);
        }
    }

    ///////////////////NOTARY/////////////////////////////
    function balanceOf(address deadMan) external view notaryOnly returns (Balance[] memory) {
        return deadManBalance[deadMan];
    }

    struct Dispatch {
        address heir;
        address token;
        uint256 amount;
    }
    mapping (address => Dispatch[]) heritageDispatch;
    function addDispatch(address deadMan, Dispatch[] calldata dispatchArg) external notaryOnly {
        Dispatch[] storage dispatch = heritageDispatch[deadMan];
        uint256 length = dispatchArg.length;
        for (uint256 i = 0; i < length; i++) 
        { 
            dispatch.push(dispatchArg[i]);
        }
    }

    function getDispatch(address deadMan) external view notaryOnly returns (Dispatch[] memory) {
        return heritageDispatch[deadMan];
    }
}