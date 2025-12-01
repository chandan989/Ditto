const { ethers } = require("ethers");

async function main() {
    const mnemonic = "roast stomach sister estate kidney assist brisk manage segment exhibit student apple";
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    console.log("ADDRESS=" + wallet.address);
}

main();
