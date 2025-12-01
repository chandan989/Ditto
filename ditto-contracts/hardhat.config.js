require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: __dirname + "/.env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.20",
    networks: {
        baseSepolia: {
            url: "https://sepolia.base.org",
            chainId: 84532,
            accounts: ["0x6fc1b30aadef05ca7a45c8402699e7bd3a128fb68827279cffFb922661eB19A1706C44"],
        },
    },
};
