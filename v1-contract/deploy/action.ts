/* eslint-disable node/no-unpublished-import */
import { ethers } from "hardhat";
const fs = require("fs");
const path = require("path");
const OrgContract = require("../abis/Org.json");

async function main() {
  const contract = await ethers.getContractFactory("ActionContract");
  const contractInstance = await contract.deploy(OrgContract.address);

  await contractInstance.deployed();

  console.log("Action contract deployed to:", contractInstance.address);

  const data = {
    address: contractInstance.address,
    abi: JSON.parse(contractInstance.interface.format("json") as string),
  };
  fs.writeFileSync(
    path.join(__dirname, "../abis/Action.json"),
    JSON.stringify(data, null, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

export default main;
