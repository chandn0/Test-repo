const { ethers } = require('hardhat');

async function main() {
    const abi = [
        "function closeTokensRound(address[] memory tokensList,uint256[] memory totalTokensBalance) external nonReentrant onlyOwner"
    ];
    const owner = "0x33aD52AD73e59995653E1e9C328C9899a8E6A6Dd";
    const cruize = "0xebC8B01D7D8a847A216D50411766Bf5d90588Aaf";
    const my_address = "0xaC714DA06C93b0cF4450b78Ba07EE6B589ed9A0E";
    // impersonating vitalik's account
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [owner],
    });
    const signer = await ethers.getSigner(
        owner
    );
    // uniswap contract
    const uniToken = new ethers.Contract(
        cruize,
        abi,
        signer
    );

    await uniToken.closeTokensRound(
        ["0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"],
        ["0"]
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });