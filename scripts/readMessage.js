const { ethers } = require("hardhat");

async function main() {
  const address = process.env.PROXY_ADDRESS;
  if (!address) throw new Error("PROXY_ADDRESS is required in .env");
  const contract = await ethers.getContractAt("MessageStore", address);
  console.log(await contract.getMessage());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
