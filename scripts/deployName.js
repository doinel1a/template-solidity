const hardhat = require('hardhat');

async function main() {
    const NameContract = await hardhat.ethers.getContractFactory('Name');
    const Name = await NameContract.deploy('Doinel');

    await Name.deployed();

    console.log('NAME DEPLOYED TO: ', Name.address);
};

main()
    .then( () => process.exit(1))
    .catch( _err => {
        console.log('ERROR: ', _err);
        process.exit(1);
    });