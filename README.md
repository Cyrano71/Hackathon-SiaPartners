# Hackathon Legasi

## Installation

`npm install`

create .env file and put your private key:

`MY_PRIVATE_KEY=************`

## Smart Contract Deployment

1. Get XTZ from the faucet https://faucet.etherlink.com/

2. Apply these commands

```
npx hardhat compile

npx hardhat run --network etherlinkTest scripts/deploy.js
```

3. Get the address of the contract
```
BaseContract {
  target: '0x0f98D06E3A95c6C041e0A789758f810912398c99',
  interface: Interface {
    fragments: [
      [ConstructorFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment],
      [FunctionFragment]
    ]....
```

## Smart Contract Interactions

With https://testnet-explorer.etherlink.com/ you can view theses contracts :
MyToken contract address : 0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93
Legasi contract address : 0x0f98D06E3A95c6C041e0A789758f810912398c99

Apply these commands: 
```
npx hardhat run --network etherlinkTest .\scripts\interact.js
```