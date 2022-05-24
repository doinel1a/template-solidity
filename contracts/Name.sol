//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Name {
    string private name;

    constructor(string memory _name) {
        name = _name;

        console.log('Deploying Name with name: ', _name);
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory _name) public {
        name = _name;

        console.log("Updating name from '%s' to '%s'", name, _name);
    }
}