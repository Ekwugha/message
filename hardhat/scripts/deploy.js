// const { ethers } = require("hardhat");
const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const messageContract = await ethers.getContractFactory("Message");
  const deployedMessageContract = await messageContract.deploy();

  await deployedMessageContract.deployed()

  console.log("Message Contract Address:", deployedMessageContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
