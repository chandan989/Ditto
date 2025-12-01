require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const mnemonic = process.env.MNEMONIC;
    console.log("MNEMONIC length:", mnemonic ? mnemonic.length : 0);

    // 1. Try manual derivation
    try {
        const wallet = ethers.Wallet.fromPhrase(mnemonic);
        console.log("Manual derivation success:", wallet.address);
    } catch (e) {
        console.error("Manual derivation failed:", e.message);
    }

    // 2. Try Hardhat signers
    try {
        const signers = await ethers.getSigners();
        console.log("Hardhat signers count:", signers.length);
        if (signers.length > 0) {
            console.log("First signer:", signers[0].address);
        }
    } catch (error) {
        console.error("Error getting signers:", error);
    }
}

main();
