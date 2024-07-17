---
sidebar_position: 2
---

# How to request Gnars from the treasury?




## Introduction

Welcome! In this tutorial, we'll learn how to create a custom transaction to send Gnars tokens from the Gnars DAO treasury. We'll walk through each step in detail, explaining basic concepts about Ethereum, blockchain, and how DAOs (Decentralized Autonomous Organizations) work. Let's get started!



## Step 1: Submit Proposal

### Access the DAO Interface

First, navigate to the [Gnars DAO interface on Nouns.build](https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17/6041?tab=activity). This interface allows you to interact with the DAO, submit proposals, and vote.

![Gnars DAO Interface](https://hackmd.io/_uploads/HyYp1KWQ0.png)

### Custom Transaction

Our tokens are in the treasury, and since there's no template for this kind of transaction, we need to create a custom transaction.

![Custom Transaction](https://ipfs.skatehive.app/ipfs/QmYcpohK6GQcTs57QK9536xCW2Hf1ZE2TGkT8tiohtdeY7?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

### Paste the contract

We need the token contract to create the transaction. The token contract address for Gnars NFT is `0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17`. You can find all our contracts in the ["Contracts"](https://nouns.build/dao/base/0x880Fb3Cf5c6Cc2d7DFC13a993E839a9411200C17/6040?tab=contracts) area on NounsBuild.

![Token Contract](https://ipfs.skatehive.app/ipfs/QmNgMuhhMtFMZzDtMvGUMYxmjjgGxznx8kgu9PhEwNmnr3?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

Once the contract address is filled, click "Next."

![Next Step](https://ipfs.skatehive.app/ipfs/QmUjZtFgk5Li44EgWWJpR33XAhCP5EFaNnyLHY2ZkMKp2N?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)


### Step 2: Choosing the Function

The contract provides several functions. The function we need is called `transferFrom(address, address, uint256)`. This function allows specific transactions by taking funds from the treasury and sending them to another wallet.

![TransferFrom Function](https://ipfs.skatehive.app/ipfs/QmYWmsMZZY9yBPekgUz9zstaHU6BYz8fNw7ENQJRQrLm7z?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

### Filling in the Details

`_from = treasury`

This indicates where the token will come from. In this case, it's the Gnars DAO treasury.

`_to = receiver`

This indicates which wallet the token should be sent to.

`_tokenId = ID of the NFT you chose`

The token ID represents which Gnar you want from the treasury. You can check all the treasury token IDs through this [link](https://zapper.xyz/account/0x72ad986ebac0246d2b3c565ab2a1ce3a14ce6f88?tab=nft).

![Token Details](https://ipfs.skatehive.app/ipfs/QmX6DaG9z1n5Kej7hHSvhJXT3x2V5iiJwa5zdrD7KkLCCU?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

### Click "Next."

![Next Step](https://ipfs.skatehive.app/ipfs/QmcrbonJSbDneFJs3wSpQKJRSAUbaNYUFQ4aWZhexfTYXV?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

### Adding the Transaction

After clicking **"Next,"** you'll need to add the transaction.

![Add Transaction](https://ipfs.skatehive.app/ipfs/QmXG9Kr8Bedtza7K7hxasHCxdefJEwvpQUhFVoBmTdbsd9?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

### Finally



![Continue](https://ipfs.skatehive.app/ipfs/QmcGK1yhcVhHb2j7xUvTUQohPq58JXhWtXc8gp2HP5obta?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

Afterwards, you'll can normally write your proposal and send it


![](https://ipfs.skatehive.app/ipfs/QmXMVqeR7F1eeWKaLhQZdjR7MznZuSxGsDHcTNnGBgfC2V?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE)

## Conclusion

Congratulations! You've successfully created a custom transaction to send Gnars tokens from the treasury. 



