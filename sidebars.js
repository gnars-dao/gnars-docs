/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 In this case, we are only using a custom sidebar to have those cool 🛹 emojis in the index oh yeaah skate or dao
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
          'Level-1/wtf-is-gnars',
          'Level-1/create-a-wallet',
          'Level-1/get-tuned',
          'Level-1/what-can-gnar-nfts-do',
          'Level-1/how-do-i-get-first-gnar'
        ],
      },
      {
        type: 'category',
        label: '🛹 Level 2 - Join the Club',
        items: [
          'Level-2/vote-in-your-first-proposal',
          'Level-2/get-more-gnars',
          'Level-2/get-farcaster-account',
          'Level-2/how-to-use-stoken-wtf',
          'Level-2/how-to-use-eth-to-buy-bread',
          'Level-2/wtf-is-this',
          'Level-2/how-to-use-rounds-wtf',
        ],
      },
      {
        type: 'category',
        label: '🛹 Level 3 - Gettin’ Gnarlier',
        items: [
          'Level-3/how-to-create-USDCtx',
          'Level-3/how-to-request-gnars',
          'Level-3/how-to-use-gnars-functions',
        ],
      },
    ],
    'For Devs': [
      'For Devs/contracts-explained',
    ],
  },
};

module.exports = sidebars;




