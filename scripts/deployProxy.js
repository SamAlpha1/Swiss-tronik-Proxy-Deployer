const { ethers, upgrades } = require("hardhat");

async function main() {
  const initialMessage = process.env.INITIAL_MESSAGE || "Hello from SamAlpha1";
  const Factory = await ethers.getContractFactory("MessageStore");
  const proxy = await upgrades.deployProxy(Factory, [initialMessage], {
    initializer: "initialize",
    kind: "uups"
  });
  await proxy.waitForDeployment();
  console.log("Proxy address:", await proxy.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
