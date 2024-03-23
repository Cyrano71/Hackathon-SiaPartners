//import {ethers} from "hardhat";
const { ethers } = require("hardhat");

async function deployMyContract() {
  const deployedContract = await ethers.deployContract("EntryPoint");
  const contract = await deployedContract.waitForDeployment();
  console.log(contract);
}

deployMyContract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});