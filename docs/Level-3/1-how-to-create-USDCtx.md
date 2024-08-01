---
sidebar_position: 1
---


# How to create a USDC request proposal 

Here's the steps to use the gnars proposal process on nouns.build base gnars. In the future this will be easier.

## 0. Full tutorial Video

<iframe width="100%" height="400" src="https://ipfs.skatehive.app/ipfs/QmTXcgYUBX4shCLvy63WdUA7Gb2MYAqGtzXC4nmfgdLd6y?pinataGatewayToken=nxHSFa1jQsiF7IHeXWH-gXCY3LDLlZ7Run3aZXZc8DRCfQz4J4a94z9DmVftXyFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


---

## 1. Go to  [Gnars on Nouns.Build](https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17/5281?tab=activity)

---

## 2. Scroll Down to Activity Tab -> Submit Proposal
![](https://i.ibb.co/3MyyxZH/image.png)

---

## 3. Add custom transaction to proposal
- Paste **USDC on base proxy address** and click **NEXT** 

> `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913`

![](https://i.ibb.co/gSz8p6k/image.png)

---

## 4. You should see this page with the Contract ABI, but... 

> Sometimes it won't load so you can go to this [LINK](https://api.basescan.org/api?module=contract&action=getabi&address=0x2ce6311ddae708829bc0784c967b7d77d19fd779&format=raw) copy everything in that page and paste it in that text box called Contract ABI

![](https://i.ibb.co/p1wcYF8/image.png)

That will load all the contract functions in the next page. You are going to call a smart contract function! How exciting is that!

---

## 5. Select the **transferfrom** function


Paste the receiver address and the amount in dollars followed by 6 zeroes ($1234 USDC would be 1234000000)

... to be corrected 
