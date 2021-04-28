Vex = require('vexaniumjs')

// Default configuration
config = {
  chainId: 'f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f', // 32 byte (64 char) hex string
  keyProvider: ['PRIVATE_KEY'], // Change use ur ptivate key
  httpEndpoint: 'https://explorer.vexanium.com:6960',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
}

vex = Vex(config)

/** @return {Promise} */
vex.transaction(
  {
    // ...headers,
    // context_free_actions: [],
    actions: [
      {
        account: 'vyndaoutoken',
        name: 'transfer',
        authorization: [{
          actor: 'testingapp21',
          permission: 'active'
        }],
        data: {
          from: 'testingapp21',
          to: 'forumcreate1',
          quantity: '0.01000000 VYN',
          memo: 'test'
        }
      }
    ]
  }
  // config -- example: {broadcast: false, sign: true}
)
