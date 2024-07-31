---
sidebar_position: 7
---

# How to use Rounds.wtf

## Background

[Rounds.wtf](https://rounds.wtf/) is an easy and fun way for communities to reward contributors. It transforms traditional bounty or grant programs into engaging, interactive experiences that involve the entire community. Through rounds, you can incentivize activity in any category to activate and grow your community. 

## Intro
Rounds WTF plays a crucial role in the Web3 ecosystem by providing a decentralized platform for governance and decision-making. Its integration with Warpcaster amplifies its impact, enabling communities to engage in transparent and collaborative governance while also enjoying the social aspects of interaction within a decentralized framework. This synergy supports the growth and sustainability of DAOs and other decentralized projects, reinforcing the core values of Web3.

![Captura de Tela 2024-06-26 às 15.33.27](https://hackmd.io/_uploads/BymIx1c80.png)

The photo above is the main display of the rounds.wtf page which is linked to the warpcast social network. The first thing that must be done is to log in to the rounds platform through your warpcaster account, to do this use the QRcode to allow access with your mobile phone. **Anyone with a Farcaster account is welcome to submit to any round.**

## How does it work

Rounds are created with their own parameters and rewards. Each round runs within a Farcaster channel where contributors can submit by posting in the corresponding channel. Winners are determined using the likes from an allowlist of users set at round creation. Once a round ends, rewards are distributed to the winners. 

![Captura de Tela 2024-06-26 às 15.35.40](https://hackmd.io/_uploads/SyQIeJ5UR.png)

To better illustrate, below is an example of a typical round timeline: 

1. A round is created to reward 1 ETH to contributors who make memes for the Nouns community in the /nouns channel.
1. Round starts.
1. Anyone can come into the /nouns channel and post their meme creations.
1. Members from the community scroll through submissions and like casts they naturally enjoy. 
1. Round ends.
1. Winners are determined by the number of cast likes they received. Rewards are distributed by pro-rata to the number of cast likes received.  
1. Winners claim the rewards through round frames or via [rounds.wtf/rewards.](https://rounds.wtf/rewards)



![Captura de Tela 2024-06-26 às 15.36.37](https://hackmd.io/_uploads/BkXIlJcUR.png)

## How do I created a round
Heads over to [rounds.wtf/add](https://rounds.wtf/add) to add rounds to your channel. An explanation of the inputs are below:

### Inputs
1. **Round name**
1. **Channel** Where will the round be held? You should be the host of the channel. Otherwise, please make sure you have permission from the channel hosts.
1. Filter: “all casts”, “media”, “mints”, “tags”:

- All casts means exactly that: all casts will be eligible for rewards.
- Media means that only casts with attached media will be eligible (ie casts with photos,   videos or gifs)
- Mints means that only casts with attached Zora links will be eligible
- Tags mean only casts with specific word(s) will be eligible (eg “based is”, “#party”, etc)

4. Rewards. This is the total rewards that will be distributed to users who post in your channel and receive likes from eligible users. Please provide the contract address and amount. We currently support Base & Zora chain tokens.
5. Curators. Whose likes count? This is a list of FIDs of which we’ll use likes from to weigh who should win rewards. Please provide a token address so we can extract the top holders FIDs. Alternatively, you can provide a list of addresses or FIDs for us to use.

### Advanced options
1. Round description 2-3 sentences describing the rounds
2. Moderator address (optional) This address will have the power to hide submissions from the rounds.wtf UI that they deem not valid.
3. Exempt FIDs (optional) These FIDs can be ignored by our systems so that casts from these accounts are not considered for the round.
4. Start date and time

![Captura de Tela 2024-06-26 às 15.38.15](https://hackmd.io/_uploads/HJRNek9LC.png)

## How do I deposit rewards into a round?
1. Connect your wallet by clicking the “Admin” button on the bottom left of the screen (below the communities column)
2. Go to your community page at rounds.wtf/[channel_name]
3. With your wallet connected, you should see a “Deposit” button below the corresponding round card. Click deposit.

## How do I submit?
Anyone can submit by posting into the channel where the round is being run. Some rounds have certain filters which would require the poster to add media, a mint or even a tag to their cast for it to be valid. 

## How do Users claim rewards?
Users can claim rewards through round frames or [rounds.wtf/rewards. ](https://rounds.wtf/rewards)

Round frames are pertinent to specific rounds.  Once the round ends, winners can click the **"Claim"** button on the frame to have their rewards sent to their specified address.

Through the rewards page, users can sign in and view all rewards they have earned in any round. This is a great complement to frames as they encompass all rounds as opposed to just one. In case you ever missed a reward, you can find past rounds here. 

**After claiming a given round, check the wallet connected to the warpcast and locate the token on Basescan or another contract search network on the appropriate blockchain.**

![Captura de Tela 2024-06-26 às 16.02.22](https://hackmd.io/_uploads/HJBy8ycIR.png)

This possibility of claim rounds.wtfs can be performed by rounds itself or by warpcast within a given channel, through **"rounds frames"**

## Can I round as a token distribuition mechanism?
Yes. You can use the current rounds to set up the same round back-to-back to have one "perpetual round". They will be launching a more appropriate version of perpetual rounds soon. Perpetual rounds will allow you to deposit any amount of your token (eg 10% of the entire supply) and distribute it over years if you'd like. 

## What happens with unclaimed rewards?
Depositor of rewards have the right to close claiming and withdraw any leftover rewards at their preference. This usually happens after 1 month of the round rewards being available.

## Terminology
- Claim: key mechanism for distributing rewards and recognizing contributions, reinforcing participation and engagement within decentralized communities.
- Round: Funding cycles where proposals are evaluated.
- DAO: Prophouse is governed by a DAO, where members vote on proposals.
- Proposal: Submit your proposal for an open round.
- Grant: Receive funding for your project.
- Voting Period: Voting period to decide which proposals will be funded.
- Governance: Management of proposals/rounds and voting.
- Channel: A specific topic or group where users can post and interact.
- Warpcast: Social media platform integrated with decentralized tools for interaction and engagement.

## Conclusion
Rounds.wtf, as an extension of Seneca's project and the Nouns ecosystem, builds on the extensive development of Prophouse to offer a robust platform for decentralized governance. Today, with the integration of Warpcaster, it connects seamlessly with the tools for rounds and claims, enhancing collaboration and transparency. This evolution marks a significant milestone, empowering communities with innovative tools for governance and social interaction.
