import { ethers } from "hardhat";

async function main() {
    const provider = new ethers.JsonRpcProvider("https://sepolia.base.org");
    const mnemonic = "roast stomach sister estate kidney assist brisk manage segment exhibit student apple";
    const deployer = ethers.Wallet.fromPhrase(mnemonic).connect(provider);

    console.log("Deploying contracts with the account:", deployer.address);

    // 1. Deploy LineageRegistry
    const LineageRegistry = await ethers.getContractFactory("LineageRegistry", deployer);
    const registry = await LineageRegistry.deploy();
    await registry.waitForDeployment();
    const registryAddress = await registry.getAddress();
    console.log("LineageRegistry deployed to:", registryAddress);

    // 2. Deploy DittoFactory
    const treasuryAddress = deployer.address;

    const DittoFactory = await ethers.getContractFactory("DittoFactory", deployer);
    const factory = await DittoFactory.deploy(registryAddress, treasuryAddress);
    await factory.waitForDeployment();
    const factoryAddress = await factory.getAddress();
    console.log("DittoFactory deployed to:", factoryAddress);

    // 3. Transfer ownership of Registry to Factory
    await registry.transferOwnership(factoryAddress);
    console.log("LineageRegistry ownership transferred to DittoFactory");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
