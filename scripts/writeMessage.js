const { ethers } = require("hardhat");

async function main() {
  const address = process.env.PROXY_ADDRESS;
  if (!address) throw new Error("PROXY_ADDRESS is required in .env");
  const nextMessage = process.env.MESSAGE;
  if (!nextMessage) throw new Error("Set MESSAGE in the environment");
  const contract = await ethers.getContractAt("MessageStore", address);
  const tx = await contract.setMessage(nextMessage);
  console.log("Transaction:", tx.hash);
  await tx.wait();
  console.log("Message updated");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
