const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('Name Contract', () => {
    let Name = null;

    it('Should return the deployed contract address', async () => {
        const NameContract = await ethers.getContractFactory('Name');
        Name = await NameContract.deploy('Nome1');

        await Name.deployed();

        expect(Name.address !== '' && Name.address !== null);
    });

    it('Should return the updated name', async () => {
        const setNewName = await Name.setName('Doinel');

        await setNewName.wait();

        expect(await Name.getName()).to.equal('Doinel');
    });
});