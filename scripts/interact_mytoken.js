const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("MyToken");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93"
  );

  /*
  const legasiAddress = "0xfEA1961cD4cd613782d8d2d324d3d17a61Ddb4AB"
  console.log(await contract.balanceOf(legasiAddress))
  console.log(await contract.transfer(legasiAddress, 100000))
  console.log(await contract.balanceOf(legasiAddress))
  */
 /* */
  const heirAddress = "0x8309cB6990c40F8B18aD5521d323C1Ab94E7d642"//"0x69c8c68623e3bE3F4C351F67586eD13DF3E0Cac8"
  console.log(await contract.balanceOf(heirAddress))
 
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});