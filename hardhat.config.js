require('@nomiclabs/hardhat-waffle');

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.MUMBAI_PROJ_ID}`,
      accounts: [
        process.env.WALLET_P_K
      ]
    },
    // mainnet: {},
  },
  solidity: '0.8.4',
};
