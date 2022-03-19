require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purse include ensure sun stay'; 
let testAccounts = [
"0x8a43da892989cbbb915c4be213109def717adbff8c8524c5759ead302b359b7d",
"0x25f8852dfa97f33b50411c408484aa8602105e00dcac73aaca711a93eab1cd24",
"0x5094dc9aba07ed528bf5c61b9acd0d0b43a3fae9883abd0e5701fd1042b79fd3",
"0xa61a5b3802d2a9e4277de0c498e7da3e82892c960e51644a71ba88fdd53bafcd",
"0x144f660e870518018a78218a0fb0c9c70729315c0e005810d9df0f172b6b85fd",
"0xa27a6c157e972e068c08646f4b98c35e0e6b32b882aa8e8c7cff38fe4bb9db89",
"0x1c6e93075746e682373b8e8ae1a0dc96405418871a79fd49316164857537b10c",
"0x997270f01e7d172bf0741e3da9ad86122853cd8fc9f0caf452198eea042d6f55",
"0x33f8f51367e577ae65670ee9bba21152eb0188d8cc3ec54ee352bc694ee03a3e",
"0x5d12d8b3ba54688cdd189c3cf74ce400726f222b91d6075b42a4e50586924a21"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


