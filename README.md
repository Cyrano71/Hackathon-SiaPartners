# Hackathon Legasi

## Installation

`npm install`

create .env file and put your private key:

`MY_PRIVATE_KEY=************`

## Smart Contract

With https://testnet-explorer.etherlink.com/ you can view theses contracts :
MyToken contract address : 0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93
Legasi contract address : 0x0f98D06E3A95c6C041e0A789758f810912398c99

If you want to interact with the smart contract use 

```
npx hardhat compile

npx hardhat run --network etherlinkTest scripts/deploy.js

npx hardhat run --network etherlinkTest .\scripts\interact.js
```