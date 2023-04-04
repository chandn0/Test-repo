

const { ethers } = require('hardhat');

// Deploy function
async function testing() {
    [account] = await ethers.getSigners();
    deployerAddress = account.address;
    const Greeter = await ethers.getContractFactory("Greeter");
    contract = await Greeter.deploy();

    const sum = await contract.sum(2, 3);

    console.log(sum);
    if (sum == 5) {
        console.log("Success")
    } else {
        console.log("Failure")
    }

}
testing()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });




