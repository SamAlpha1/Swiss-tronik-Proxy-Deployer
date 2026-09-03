import { defineConfig } from "hardhat/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";
import hardhatUpgrades from "@openzeppelin/hardhat-upgrades";
import "dotenv/config";

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

export default defineConfig({
  plugins: [hardhatEthers, hardhatUpgrades],
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: { enabled: true, runs: 200 },
      evmVersion: "paris"
    }
  },
  networks: {
    swisstronik: {
      type: "http",
      chainType: "l1",
      url: process.env.SWTR_RPC_URL || "https://json-rpc.testnet.swisstronik.com/",
      chainId: Number(process.env.SWTR_CHAIN_ID || 1291),
      accounts
    }
  }
});
