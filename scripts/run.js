const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyFirstNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  
    // Mint
    let txn = await nftContract.makeNFT()
    await txn.wait()

    // Mint again
    txn = await nftContract.makeNFT()
    await txn.wait()
};
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();