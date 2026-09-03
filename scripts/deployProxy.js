import hre from "hardhat";
import { upgrades } from "@openzeppelin/hardhat-upgrades";

async function main() {
  const connection = await hre.network.create();
  const { ethers } = connection;
  const upgradesApi = await upgrades(hre, connection);

  const initialMessage = process.env.INITIAL_MESSAGE || "Hello from SamAlpha1";
  const Factory = await ethers.getContractFactory("MessageStore");
  const proxy = await upgradesApi.deployProxy(Factory, [initialMessage], {
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
