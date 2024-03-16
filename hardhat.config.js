const dotenv = require("dotenv");
require("@nomiclabs/hardhat-waffle");
dotenv.config({ path: __dirname + "/.env" });
privateKey = process.env.TEST_PRIVATE_KEY;
testNetPrivateKey = process.env.TEST_NET_PRIVATE_KEY;
secNetPk = process.env.SEC_NET_PK;
console.log(testNetPrivateKey);
let pk = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://lb.drpc.org/ogrpc?network=polygon-mumbai&dkey=AnfIhgajAkObjQxDb49BcekF0oq3S8YR7pVkdk2eQLM2",
      accounts: [pk],
      gas: 2100000,
      gasPrice: 8000000000,
      saveDeployments: true,
    },
    mainnet: {
      url: "https://lb.drpc.org/ogrpc?network=polygon&dkey=AnfIhgajAkObjQxDb49BcekF0oq3S8YR7pVkdk2eQLM2",
      accounts: [pk],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};
