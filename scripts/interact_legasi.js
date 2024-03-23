const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("LegasiV0");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x0f98D06E3A95c6C041e0A789758f810912398c99"
  );

  const deadManAddress = "0x6CFb9257ef8E80edD6a268c51D28d2D5D597688a"
  const notaryAddress = "0xE6a5086276722F8D0BBAf259190Fd7d62F0F05a8"
  const heirAddress = "0x69c8c68623e3bE3F4C351F67586eD13DF3E0Cac8"

  //console.log(await contract.isNotary(notaryAddress))
  //console.log(await contract.addNotary(notaryAddress));
  //console.log(await contract.isNotary(notaryAddress))
  //console.log(await contract.addToken("0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93", ethers.parseEther("10")));
  
  /* CAN ONLY BE USED BY THE NOTARY
  console.log(await contract.balanceOf(deadManAddress));
  */
  console.log(await contract.transferFunds(deadManAddress, [[heirAddress, 10]]));
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});