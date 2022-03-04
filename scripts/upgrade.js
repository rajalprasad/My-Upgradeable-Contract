const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x85EB2aE0B0F014c5D02cF65C0798c8316eac271D";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });