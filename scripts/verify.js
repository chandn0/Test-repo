


const { ethers } = require('hardhat');

// Deploy function
async function verify() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    console.log(`Deploying contracts using ${deployerAddress}`);
    const token = await ethers.getContractFactory('ERC20Modified');
    const tokenInstance = await token.deploy();
    await tokenInstance.deployed();
    await run(`verify:verify`, {
        address: tokenInstance.address,
    });
}

verify()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
