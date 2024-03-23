const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("MyToken");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93"
  );

  //console.log(await contract.transfer("0x0f98D06E3A95c6C041e0A789758f810912398c99", 100000))
    console.log(await contract.balanceOf("0x0f98D06E3A95c6C041e0A789758f810912398c99"))
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});