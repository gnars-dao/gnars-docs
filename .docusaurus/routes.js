import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gnars-docs/__docusaurus/debug',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug', '70e'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/config',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/config', '709'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/content',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/content', 'cf6'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/globalData', 'c02'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/metadata', '471'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/registry', 'c56'),
    exact: true
  },
  {
    path: '/gnars-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/gnars-docs/__docusaurus/debug/routes', 'a7b'),
    exact: true
  },
  {
    path: '/gnars-docs/blog',
    component: ComponentCreator('/gnars-docs/blog', 'a37'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/archive',
    component: ComponentCreator('/gnars-docs/blog/archive', 'f83'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/drop',
    component: ComponentCreator('/gnars-docs/blog/drop', 'ceb'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/first-blog-post',
    component: ComponentCreator('/gnars-docs/blog/first-blog-post', '73b'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/long-blog-post',
    component: ComponentCreator('/gnars-docs/blog/long-blog-post', '2ee'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/mdx-blog-post',
    component: ComponentCreator('/gnars-docs/blog/mdx-blog-post', 'fdb'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags',
    component: ComponentCreator('/gnars-docs/blog/tags', '03c'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/skateboard',
    component: ComponentCreator('/gnars-docs/blog/tags/skateboard', 'ee3'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/trickpedia',
    component: ComponentCreator('/gnars-docs/blog/tags/trickpedia', 'e08'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/video',
    component: ComponentCreator('/gnars-docs/blog/tags/video', 'b6f'),
    exact: true
  },
  {
    path: '/gnars-docs/markdown-page',
    component: ComponentCreator('/gnars-docs/markdown-page', '4d2'),
    exact: true
  },
  {
    path: '/gnars-docs/search',
    component: ComponentCreator('/gnars-docs/search', '7ee'),
    exact: true
  },
  {
    path: '/gnars-docs/docs',
    component: ComponentCreator('/gnars-docs/docs', 'bfb'),
    routes: [
      {
        path: '/gnars-docs/docs/category/-level-1---enter-gnarnia',
        component: ComponentCreator('/gnars-docs/docs/category/-level-1---enter-gnarnia', 'aef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/category/-level-2---welcome-to-club',
        component: ComponentCreator('/gnars-docs/docs/category/-level-2---welcome-to-club', 'f00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/category/-level-3---gettin-gnarlier',
        component: ComponentCreator('/gnars-docs/docs/category/-level-3---gettin-gnarlier', '490'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/intro',
        component: ComponentCreator('/gnars-docs/docs/intro', 'bd9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/how-do-i-get-first-gnar',
        component: ComponentCreator('/gnars-docs/docs/Level-1/how-do-i-get-first-gnar', 'ec6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/how-to-create-wallet',
        component: ComponentCreator('/gnars-docs/docs/Level-1/how-to-create-wallet', '285'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/how-to-use-discord',
        component: ComponentCreator('/gnars-docs/docs/Level-1/how-to-use-discord', '1d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/what-gnars-nft-can-do',
        component: ComponentCreator('/gnars-docs/docs/Level-1/what-gnars-nft-can-do', 'f3a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/what-is-a-NFT',
        component: ComponentCreator('/gnars-docs/docs/Level-1/what-is-a-NFT', '88e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-1/what-is-ethereum',
        component: ComponentCreator('/gnars-docs/docs/Level-1/what-is-ethereum', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-1-verifying-your-gnar',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-1-verifying-your-gnar', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-2-Gnarly-Meetings',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-2-Gnarly-Meetings', 'e28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals', 'fcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-4-how-to-use-eth-to-buy',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-4-how-to-use-eth-to-buy', '2c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-5-proposal-guidelines',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-5-proposal-guidelines', 'e0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/2-6',
        component: ComponentCreator('/gnars-docs/docs/Level-2/2-6', '49c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-2/translate-your-site',
        component: ComponentCreator('/gnars-docs/docs/Level-2/translate-your-site', '61a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-3/bots',
        component: ComponentCreator('/gnars-docs/docs/Level-3/bots', '79c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-3/nounish-lifestyle',
        component: ComponentCreator('/gnars-docs/docs/Level-3/nounish-lifestyle', 'deb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-3/nounish-lifestyle copy',
        component: ComponentCreator('/gnars-docs/docs/Level-3/nounish-lifestyle copy', 'fd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-3/translate-your-site',
        component: ComponentCreator('/gnars-docs/docs/Level-3/translate-your-site', '3a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gnars-docs/',
    component: ComponentCreator('/gnars-docs/', 'bb9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
