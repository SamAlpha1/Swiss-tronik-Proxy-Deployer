require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];

module.exports = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: { enabled: true, runs: 200 }
    }
  },
  networks: {
    swisstronik: {
      url: process.env.SWTR_RPC_URL || "https://json-rpc.testnet.swisstronik.com/",
      chainId: Number(process.env.SWTR_CHAIN_ID || 1291),
      accounts
    }
  }
};
