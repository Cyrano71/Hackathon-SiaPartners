# Hackathon Legasi

## Installation

`npm install`

create .env file and put your private key:

`MY_PRIVATE_KEY=************`

## Smart Contract

With https://testnet-explorer.etherlink.com/ you can view theses contracts :
MyToken address : 0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93
EntryPoint address : 0x373070dF73eC02d808eEa331400CaF05e0Cb81b7

If you want to interact with the smart contract use 

```
npx hardhat compile

npx hardhat run --network etherlinkTest scripts/deploy.js

npx hardhat run --network etherlinkTest .\scripts\interact.js
```