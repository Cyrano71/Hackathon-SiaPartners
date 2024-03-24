const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("LegasiV0");

  const deadManAddress = "0x6CFb9257ef8E80edD6a268c51D28d2D5D597688a"
  const notaryAddress = "0xE6a5086276722F8D0BBAf259190Fd7d62F0F05a8"
  const heirAddress = "0x8309cB6990c40F8B18aD5521d323C1Ab94E7d642"//"0x69c8c68623e3bE3F4C351F67586eD13DF3E0Cac8"
  const erc20 = "0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93";
  const legaciAddress = "0xfEA1961cD4cd613782d8d2d324d3d17a61Ddb4AB"

  const contract = MyContract.attach(
    legaciAddress
  );

  /*
  //By dead man
  console.log(await contract.addBalance(erc20, 10,{ gasLimit: 1500000 }))
  
  //by owner
  console.log(await contract.isNotary(notaryAddress))
  console.log(await contract.addNotary(notaryAddress));
  console.log(await contract.isNotary(notaryAddress))
  */

  /* CAN ONLY BE USED BY THE NOTARY
  console.log(await contract.balanceOf(deadManAddress));
  console.log(await contract.addDispatch(deadManAddress, [{heir: heirAddress, token: erc20, amount : 10}], { gasLimit: 1500000 }));
  console.log(await contract.getDispatch(deadManAddress))
  */

  //By owner
  //console.log(await contract.transferFunds(deadManAddress))
  
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});