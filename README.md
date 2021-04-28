# vextransfer

npm i

node transfer

```render-babel
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
```

<pree>keyProvider: ['PRIVATE_KEY'], change PRIVATE_KEY</pree>


```render-babel
actions: [
      {
        account: 'vyndaoutoken',
        name: 'transfer',
        authorization: [{
          actor: 'account',
          permission: 'active'
        }],
        data: {
          from: 'account',
          to: 'account',
          quantity: '0.01000000 VYN',
          memo: 'test'
        }
      }
    ]
    
 ```
 
  <pree>actor: 'account' (change account use sender account)</pree>
  
  <pree>from: 'account' (change account use sender account)</pree>
  
  <pree>to: 'account' (change account use recipient account)</pree>
  
  
    
