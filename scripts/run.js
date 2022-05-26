const main = async() => {
    const [ owner, randomUser ] = await hre.ethers.getSigners()
    const runeContractFactory = await hre.ethers.getContractFactory("RuneNFT")
    const runeContract = await runeContractFactory.deploy()
    await runeContract.deployed()
    
    console.log("Rune Contract deployed to:", runeContract.address);

    let Txn = await runeContract.mintNft("Odin", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted first NFT");

    Txn = await runeContract.mintNft("Odin", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted first NFT");

    Txn = await runeContract.mintNft("Thor", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted first NFT");

    let contractBalance = await hre.ethers.provider.getBalance(runeContract.address);
    ownerBalance = await hre.ethers.provider.getBalance(owner.address);

    console.log("Contract Balance after minting:", hre.ethers.utils.formatEther(contractBalance));
    console.log("Owner's Balance after minting:", hre.ethers.utils.formatEther(ownerBalance));

    let totalRunes = await runeContract.totalMintedRunes();
    console.log(totalRunes);

    let totalSingleRune = await runeContract.totalSingleRune("Odin");
    console.log(totalSingleRune);

}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

runMain();