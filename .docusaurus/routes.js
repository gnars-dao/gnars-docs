import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gnars-docs/fr/blog',
    component: ComponentCreator('/gnars-docs/fr/blog', '7f8'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/archive',
    component: ComponentCreator('/gnars-docs/fr/blog/archive', '9e6'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/drop',
    component: ComponentCreator('/gnars-docs/fr/blog/drop', '033'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/first-blog-post',
    component: ComponentCreator('/gnars-docs/fr/blog/first-blog-post', '176'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/long-blog-post',
    component: ComponentCreator('/gnars-docs/fr/blog/long-blog-post', 'abc'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/mdx-blog-post',
    component: ComponentCreator('/gnars-docs/fr/blog/mdx-blog-post', '5fa'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags',
    component: ComponentCreator('/gnars-docs/fr/blog/tags', 'e96'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/skateboard',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/skateboard', 'f72'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/trickpedia',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/trickpedia', '605'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/video',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/video', '900'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/markdown-page',
    component: ComponentCreator('/gnars-docs/fr/markdown-page', '6ec'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/search',
    component: ComponentCreator('/gnars-docs/fr/search', '24e'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/docs',
    component: ComponentCreator('/gnars-docs/fr/docs', 'b3f'),
    routes: [
      {
        path: '/gnars-docs/fr/docs/category/-level-1---enter-gnarnia',
        component: ComponentCreator('/gnars-docs/fr/docs/category/-level-1---enter-gnarnia', 'fec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/category/-level-2---welcome-to-club',
        component: ComponentCreator('/gnars-docs/fr/docs/category/-level-2---welcome-to-club', '49b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/category/-level-3---gettin-gnarlier',
        component: ComponentCreator('/gnars-docs/fr/docs/category/-level-3---gettin-gnarlier', '373'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/intro',
        component: ComponentCreator('/gnars-docs/fr/docs/intro', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/how-do-i-get-first-gnar',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/how-do-i-get-first-gnar', '7c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/how-to-create-wallet',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/how-to-create-wallet', '578'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/how-to-use-discord',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/how-to-use-discord', '319'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/what-gnars-nft-can-do',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/what-gnars-nft-can-do', 'e39'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/what-is-a-NFT',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/what-is-a-NFT', 'd38'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-1/what-is-ethereum',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-1/what-is-ethereum', 'f23'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-1-verifying-your-gnar',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-1-verifying-your-gnar', '807'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-2-Gnarly-Meetings',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-2-Gnarly-Meetings', '3e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals', 'ed1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-4-how-to-use-eth-to-buy',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-4-how-to-use-eth-to-buy', 'd5d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-5-proposal-guidelines',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-5-proposal-guidelines', '71e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/2-6',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/2-6', 'e99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-2/translate-your-site',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/translate-your-site', 'f8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/bots',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/bots', 'f37'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/nounish-lifestyle',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/nounish-lifestyle', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/nounish-lifestyle copy',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/nounish-lifestyle copy', 'cdb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/thats-gnarly',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/thats-gnarly', '0e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/translate-your-site',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/translate-your-site', '95a'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gnars-docs/fr/',
    component: ComponentCreator('/gnars-docs/fr/', '348'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
