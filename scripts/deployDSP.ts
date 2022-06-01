const hre = require("hardhat");

async function main() {

  const DF = await hre.ethers.getContractFactory("DSP");

  const df = await DF.deploy();
  await df.deployed();

  const deployer = df.deployTransaction.from;
  const tx = df.deployTransaction.hash;
  console.log(
    "Decfarm contract has been deployed at address :",
    df.address,
    "on",
    process.env.DEFAULT_NETWORK,
    "platform"
  );
  console.log("Deployer is ", deployer);
  console.log("Transaction ID is ", tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
