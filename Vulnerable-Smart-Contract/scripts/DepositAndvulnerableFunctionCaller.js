const { ethers } = require("ethers");
const {
  abi,
} = require("../artifacts/contracts/VulnerableContract.sol/VulnerableContract.json");
require("dotenv").config();

const { ContractAddress } = require("../ContractAdress.json");

require("dotenv").config();
const provider = new ethers.WebSocketProvider(
  `wss://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contract = new ethers.Contract(ContractAddress, abi, provider);

async function DepositAndvulnerableFunctionCaller() {
  try {
    const deposit = await contract
      .connect(signer)
      .deposit({ value: ethers.parseEther("0.00001") });
    const depositTx = await deposit.wait();
    console.log("depositTx-------=", depositTx);

    const vulnerableFunction = await contract
      .connect(signer)
      .vulnerableFunction(ethers.parseEther("0.00001"));
    const vulnerableFunctionTx = await vulnerableFunction.wait();
    console.log("vulnerableFunctionTx-------=", vulnerableFunctionTx);
    return;
  } catch (error) {
    console.log(error);
    return error;
  }
}
DepositAndvulnerableFunctionCaller();
