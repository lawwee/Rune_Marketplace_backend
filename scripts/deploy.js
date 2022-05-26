const main = async() => {
    const runeContractFactory = await hre.ethers.getContractFactory("RuneNFT")
    const runeContract = await runeContractFactory.deploy()
    await runeContract.deployed()
    console.log("Rune Contract deployed to:", runeContract.address);

    let Txn = await runeContract.mintNft("Odin", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted first NFT");

    Txn = await runeContract.mintNft("Thor", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted second NFT");

    Txn = await runeContract.mintNft("Balder", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted third NFT");

    Txn = await runeContract.mintNft("Frigg", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted fourth NFT");

    Txn = await runeContract.mintNft("Borr", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted fifth NFT");

    Txn = await runeContract.mintNft("Buri", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted sixth NFT");

    Txn = await runeContract.mintNft("Egil", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted seventh NFT");

    Txn = await runeContract.mintNft("Eir", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted eighth NFT");

    Txn = await runeContract.mintNft("Forseti", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted ninth NFT");

    Txn = await runeContract.mintNft("Frey", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted tenth NFT");

    Txn = await runeContract.mintNft("Freya", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted eleventh NFT");

    Txn = await runeContract.mintNft("Heimdall", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twelfth NFT");

    Txn = await runeContract.mintNft("Hel", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted thirteenth NFT");

    Txn = await runeContract.mintNft("Idunn", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted fourteenth NFT");

    Txn = await runeContract.mintNft("Kara", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted fifteenth NFT");

    Txn = await runeContract.mintNft("Loki", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted sixteenth NFT");

    Txn = await runeContract.mintNft("Magni", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted seventeenth NFT");

    Txn = await runeContract.mintNft("Mani", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted eighteenth NFT");

    Txn = await runeContract.mintNft("Njord", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted nineteenth NFT");

    Txn = await runeContract.mintNft("Ragnar", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted twentieth NFT");

    Txn = await runeContract.mintNft("Ran", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-first NFT");

    Txn = await runeContract.mintNft("Sigurd", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-second NFT");

    Txn = await runeContract.mintNft("Sol", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted twenty-third NFT");

    Txn = await runeContract.mintNft("Thruer", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-fourth NFT");

    Txn = await runeContract.mintNft("Tyr", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-fifth NFT");

    Txn = await runeContract.mintNft("Ullr", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted twenty-sixth NFT");

    Txn = await runeContract.mintNft("Vali", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-seventh NFT");

    Txn = await runeContract.mintNft("Var", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted twenty-eighth NFT");

    Txn = await runeContract.mintNft("Vidar", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait()
    console.log("Minted twenty-ninth NFT");

    Txn = await runeContract.mintNft("Vor", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted thirtieth NFT");

    Txn = await runeContract.mintNft("Yggdrasil", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted thirty-first NFT");

    Txn = await runeContract.mintNft("Bragi", {value: hre.ethers.utils.parseEther("0.01")});
    await Txn.wait();
    console.log("Minted thirty-second NFT");
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