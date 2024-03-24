# Hackathon Legasi

## Installation

1. Install the packages

`npm install`

2. create .env file and put your private key:

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
  target: '0xfEA1961cD4cd613782d8d2d324d3d17a61Ddb4AB',
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
- MyToken contract address : 0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93
- Legasi contract address : 0xfEA1961cD4cd613782d8d2d324d3d17a61Ddb4AB

Apply these commands: 

1. From the owner perspective : Interact with the MyToken contract to transfer the fund to the Legasi contract

```
npx hardhat run --network etherlinkTest .\scripts\interact_mytoken.js
```

2. From the owner perspective : Interact with the Legasi contract to addBalance (the owner is also the dead man) and addNotary 

```
npx hardhat run --network etherlinkTest .\scripts\interact_legasi.js
```

3. From the notary perspective : Interact with the Legasi contract to balanceOf, addDispatch and getDispatch

4. From the owner perspective : Interact with the Legasi contract to transferFunds

5. Result

![alt text](./images/imgage1.png)


![alt text](./images/imgage2.png)