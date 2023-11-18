
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const VulnerableContract = await hre.ethers.deployContract("VulnerableContract");

  const vulnerableContract = await VulnerableContract.waitForDeployment();

  console.log("Contract deploy at ", await vulnerableContract.getAddress());
  const filePath = "./ContractAdress.json";

  const jsonData = JSON.stringify(
    { ContractAddress: await vulnerableContract.getAddress() },
    null,
    2
  );

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    }
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});