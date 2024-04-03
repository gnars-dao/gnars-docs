/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: {
    Onboarding: [
      'intro', // 🐣 - Start Here
      {
        type: 'category',
        label: '🛹 Level 1 - Enter Gnarnia',
        items: [
          'Level-1/what-is-ethereum',
          'Level-1/what-is-a-NFT',
          'Level-1/how-to-create-wallet',
          'Level-1/what-can-gnar-nfts-do',
          'Level-1/how-to-use-discord',
          'Level-1/how-do-i-get-first-gnar'
        ],
      },
      {
        type: 'category',
        label: '🛹 Level 2 - Join the Club',
        items: [
          'Level-2/2-1-verifying-your-gnar',
          'Level-2/2-2-Gnarly-Meetings',
          'Level-2/2-3-How-to-vote-in-the-DAO-proposals',
          'Level-2/2-4-how-to-use-eth-to-buy',
          'Level-2/2-5-proposal-guidelines',
          'Level-2/2-6'
        ],
      },
      {
        type: 'category',
        label: '🛹 Level 3 - Gettin’ Gnarlier',
        items: [
          'Level-3/nounish-lifestyle',
          'Level-3/what-is-CC0',
          'Level-3/create-USDCtx',


        ],
      },
      {
        type: 'category',
        label: '🛹 Level 4 - Callin\' the Shots',
        items: [
          'Level-4/4-1-Picking-the-Next-Gnar'
        ],
      },
    ],
    DAO: [
      {
        type: 'category',
        label: 'Governance',
        items: [
          'DAO/introduction-to-governance'
        ]
      },
      {
        type: 'doc',
        id: 'DAO/contract-interaction'
      }
    ],
  },
};

module.exports = sidebars;




