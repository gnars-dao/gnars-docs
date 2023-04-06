import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gnars-docs/es/blog',
    component: ComponentCreator('/gnars-docs/es/blog', 'b25'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/archive',
    component: ComponentCreator('/gnars-docs/es/blog/archive', '919'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/drop',
    component: ComponentCreator('/gnars-docs/es/blog/drop', '2ef'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/first-blog-post',
    component: ComponentCreator('/gnars-docs/es/blog/first-blog-post', '117'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/long-blog-post',
    component: ComponentCreator('/gnars-docs/es/blog/long-blog-post', 'efe'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/mdx-blog-post',
    component: ComponentCreator('/gnars-docs/es/blog/mdx-blog-post', 'de1'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/tags',
    component: ComponentCreator('/gnars-docs/es/blog/tags', '045'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/tags/skateboard',
    component: ComponentCreator('/gnars-docs/es/blog/tags/skateboard', '882'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/tags/trickpedia',
    component: ComponentCreator('/gnars-docs/es/blog/tags/trickpedia', '139'),
    exact: true
  },
  {
    path: '/gnars-docs/es/blog/tags/video',
    component: ComponentCreator('/gnars-docs/es/blog/tags/video', '966'),
    exact: true
  },
  {
    path: '/gnars-docs/es/markdown-page',
    component: ComponentCreator('/gnars-docs/es/markdown-page', 'c73'),
    exact: true
  },
  {
    path: '/gnars-docs/es/search',
    component: ComponentCreator('/gnars-docs/es/search', 'c6d'),
    exact: true
  },
  {
    path: '/gnars-docs/es/docs',
    component: ComponentCreator('/gnars-docs/es/docs', 'e85'),
    routes: [
      {
        path: '/gnars-docs/es/docs/category/-level-1---enter-gnarnia',
        component: ComponentCreator('/gnars-docs/es/docs/category/-level-1---enter-gnarnia', '74c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/category/-level-2---welcome-to-club',
        component: ComponentCreator('/gnars-docs/es/docs/category/-level-2---welcome-to-club', 'bff'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/category/-level-3---gettin-gnarlier',
        component: ComponentCreator('/gnars-docs/es/docs/category/-level-3---gettin-gnarlier', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/intro',
        component: ComponentCreator('/gnars-docs/es/docs/intro', 'f7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/how-do-i-get-first-gnar',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/how-do-i-get-first-gnar', '17b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/how-to-create-wallet',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/how-to-create-wallet', '38f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/how-to-use-discord',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/how-to-use-discord', 'fcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/what-gnars-nft-can-do',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/what-gnars-nft-can-do', '264'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/what-is-a-NFT',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/what-is-a-NFT', 'b58'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-1/what-is-ethereum',
        component: ComponentCreator('/gnars-docs/es/docs/Level-1/what-is-ethereum', '731'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-1-verifying-your-gnar',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-1-verifying-your-gnar', 'e05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-2-Gnarly-Meetings',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-2-Gnarly-Meetings', 'a34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-3-How-to-vote-in-the-DAO-proposals', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-4-how-to-use-eth-to-buy',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-4-how-to-use-eth-to-buy', 'd94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-5-proposal-guidelines',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-5-proposal-guidelines', 'c22'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/2-6',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/2-6', 'aec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-2/translate-your-site',
        component: ComponentCreator('/gnars-docs/es/docs/Level-2/translate-your-site', 'a5c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-3/bots',
        component: ComponentCreator('/gnars-docs/es/docs/Level-3/bots', '3ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-3/nounish-lifestyle',
        component: ComponentCreator('/gnars-docs/es/docs/Level-3/nounish-lifestyle', '008'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-3/nounish-lifestyle copy',
        component: ComponentCreator('/gnars-docs/es/docs/Level-3/nounish-lifestyle copy', '1bb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-3/thats-gnarly',
        component: ComponentCreator('/gnars-docs/es/docs/Level-3/thats-gnarly', '1e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/es/docs/Level-3/translate-your-site',
        component: ComponentCreator('/gnars-docs/es/docs/Level-3/translate-your-site', '19f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/gnars-docs/es/',
    component: ComponentCreator('/gnars-docs/es/', '6ec'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
