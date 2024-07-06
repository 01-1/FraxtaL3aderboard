import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as tenderly from "@tenderly/hardhat-tenderly";
 
tenderly.setup({ automaticVerifications: true });

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    vi: {
      url: "https://virtual.fraxtal.rpc.tenderly.co/505969de-d873-40f0-8951-f0d3985c3553", // The RPC URL
      chainId: 727,
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"] // Private Key of the deploy account (Address: 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266)
    }
  },
  tenderly: {
    // https://docs.tenderly.co/account/projects/account-project-slug
    project: "i",
    username: "v-i",
  },
  ignition: {
    requiredConfirmations: 1
  }
};

export default config;