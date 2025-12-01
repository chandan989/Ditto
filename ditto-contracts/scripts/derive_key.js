require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const mnemonic = process.env.MNEMONIC;
    if (!mnemonic) {
        console.error("No mnemonic found");
        return;
    }
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    console.log("PRIVATE_KEY=" + wallet.privateKey);
}

main();
