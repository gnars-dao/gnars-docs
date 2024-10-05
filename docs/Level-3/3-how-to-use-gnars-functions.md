---
sidebar_position: 3
---

# How to use Gnars Contracts Functions 

If all frontends fail you, the apocalypse seems imminent, or you just need to interact with a specific function in the Gnars contracts, you can access the contracts directly via their proxies on **BaseScan** and execute the functions manually. This guide will show you how to navigate the contracts and use different functions, such as burning NFTs or approving ownership transfers.

#### **Accessing the Contracts on BaseScan**

To interact with Gnars contracts, follow these steps:

1. **Navigate to the Contract on BaseScan**  
   - Open [BaseScan](https://basescan.org) and search for the contract you want to interact with. You’ll typically be working with the following contracts:
     - **Token Contract**: Manages Gnars NFT ownership and transfers.
     - **Auction House Contract**: Handles NFT auctions.
     - **Treasury Contract**: Manages the DAO’s funds.
     - **Governor Contract**: Used for creating, voting on, and executing proposals.
     - **Metadata Renderer Contract**: Manages the on-chain metadata of the NFTs.

2. **Connect Your Wallet**  
   - Click on the **“Connect to Web3”** button at the top to link your MetaMask or WalletConnect-compatible wallet. Make sure your wallet is connected to the **Base network**.

3. **Select a Function**  
   - Go to the **"Write as Proxy"** tab and look for the function you want to execute, such as:
     - **`burn`**: This function allows you to burn a specific NFT you own.
     - **`approve`**: Grants another address permission to transfer your NFT.
     - **`transferOwnership`**: Changes the owner of the contract (for contract admins only).
   
4. **Input the Required Parameters**  
   - Each function has its own parameters. For example, the `burn` function requires the `_tokenId` parameter, which represents the ID of the NFT you want to burn.
   - Enter the values carefully, as interacting directly with the contract is final and cannot be reversed.

5. **Execute the Function**  
   - Click the **"Write"** button to execute the function. You will be prompted to confirm the transaction in your wallet. Double-check the gas fees and details before confirming.

#### **Understanding Gnars Contract Functions**

- **Split and Earnings**: Zora contracts allow you to define how earnings are split between different wallet addresses when a Gnar is sold or transferred. You can set a split to direct a percentage of earnings to the Gnars DAO treasury (`0x72ad986ebac0246d2b3c565ab2a1ce3a14ce6f88`) as a way to contribute back to the community.
  
- **Setting a Price vs. Reward Mechanism**: You can choose to set a fixed price for each NFT or configure a reward mechanism, depending on your goals. For auctions, use the `createAuction` function in the Auction House contract to define starting prices and durations.

- **Governor Functions**: For governance actions, use the `propose` and `vote` functions in the **Governor Contract**. These are critical for community decisions, such as funding proposals or DAO upgrades.

#### **Common Gnars Contract Functions Explained**

1. **`approve` (Token Contract)**:  
   - Grants approval for another address to transfer a specific NFT.  
   - Example: `approve("0x...recipientAddress", 1)`, where 1 is the token ID.

2. **`burn` (Token Contract)**:  
   - Burns an NFT, removing it from circulation. This is irreversible.  
   - Example: `burn(1)`, where 1 is the token ID to be burned.

3. **`settleCurrentAndCreateNewAuction` (Auction House Contract)**:  
   - Manually settles an ongoing auction and starts a new one.  
   - Useful if the automated process fails or there’s a need for manual intervention.

4. **`createAuction` (Auction House Contract)**:  
   - Creates a new auction with defined parameters like reserve price, duration, and token ID.

5. **`propose` (Governor Contract)**:  
   - Creates a new proposal for governance voting. This can include actions like transferring funds, updating contracts, or setting new DAO rules.

6. **`vote` (Governor Contract)**:  
   - Cast your vote on an existing proposal using your NFTs. Each Gnar represents one vote.

#### **Recommended Setup: Use the Base Network**

Make sure you’re interacting with the contracts on the **Base network** to avoid confusion or mistakes. The Base network offers lower transaction fees, making it more cost-effective to interact with these contracts directly compared to Ethereum mainnet.

#### **Additional Tips**

- **Double-Check Contract Addresses**: Always verify that you are using the correct contract addresses to avoid sending transactions to malicious contracts.
- **Use Proxies When Possible**: Gnars contracts use proxies, so ensure you’re on the latest version by accessing them via the proxy links.

For detailed information on each contract and its functions, refer to the [Gnars Contracts Documentation](https://gnars.center/docs/For%20Devs/contracts-explained) or BaseScan links for real-time interactions.