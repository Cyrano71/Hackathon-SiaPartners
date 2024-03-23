const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("MyToken");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93"
  );

  const legasiAddress = "0xfEA1961cD4cd613782d8d2d324d3d17a61Ddb4AB"
  console.log(await contract.balanceOf(legasiAddress))
  console.log(await contract.transfer(legasiAddress, 100000))
  console.log(await contract.balanceOf(legasiAddress))
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});