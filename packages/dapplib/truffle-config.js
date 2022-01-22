require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth pulse coast hunt kite broken twice'; 
let testAccounts = [
"0xe5a42145166056a8e07ca4d073c8eacfa4f99e46c9182fa56c7aa9ae4fbd64ef",
"0xd82f371fd7e5d42be1a4bda0c9b44c2863d57fc820f19234360dd0fb0973483b",
"0x087f2f99ec61b38a080268e7df79de4b8ada953860e57a6df696a4be34129ddf",
"0x6dd22ad2a5ee97585b7910729e96beff744cc7085a675d8204dd315b69a05714",
"0x9d2a21bfc31403625367772ad068095d457b915463c9089ece5cb4feb4a97348",
"0x61bff9aaa3da8b76aab418143db72272203f04448796e95b2743657cb29b5c7a",
"0xf2a92a996054b21bfb1434ae8adb66bb39912f926531dda6ac9abcc5c9318ece",
"0x2716e0ddd13e01a6aa94899b99de81ac0a1a61179b6aa907d57344fe8e0870b8",
"0xa1e0b26c21a2cd38d214842646256fe528abc0f10dfcc780fd11cb62ba3d9197",
"0x1f27fb1dc7c1cf4ba7e59a78905fcec356d5ba65de5c2bda7d2c30a45237edee"
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


