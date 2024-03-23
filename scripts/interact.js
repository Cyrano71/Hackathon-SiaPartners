const { ethers } = require("hardhat");

async function callMyContract() {
  const MyContract = await ethers.getContractFactory("Legasi");
  const contract = MyContract.attach(
    // The deployed contract address
    "0x373070dF73eC02d808eEa331400CaF05e0Cb81b7"
  );

  //console.log(await contract.addNotary("0xE6a5086276722F8D0BBAf259190Fd7d62F0F05a8"));
  //console.log(await contract.addToken("0x794c3C2BaF6fCA02EfbF69350885DBB2a0Dd2e93", ethers.parseEther("1000000000000000000000000")));
  console.log(await contract.balanceOf("0x6CFb9257ef8E80edD6a268c51D28d2D5D597688a"));
}

callMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});