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
    component: ComponentCreator('/gnars-docs/blog', 'cc2'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/archive',
    component: ComponentCreator('/gnars-docs/blog/archive', 'f83'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/first-blog-post',
    component: ComponentCreator('/gnars-docs/blog/first-blog-post', '07f'),
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
    path: '/gnars-docs/blog/tags/docusaurus',
    component: ComponentCreator('/gnars-docs/blog/tags/docusaurus', 'eda'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/facebook',
    component: ComponentCreator('/gnars-docs/blog/tags/facebook', '908'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/hello',
    component: ComponentCreator('/gnars-docs/blog/tags/hello', '0f1'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/tags/hola',
    component: ComponentCreator('/gnars-docs/blog/tags/hola', '030'),
    exact: true
  },
  {
    path: '/gnars-docs/blog/welcome',
    component: ComponentCreator('/gnars-docs/blog/welcome', '56a'),
    exact: true
  },
  {
    path: '/gnars-docs/markdown-page',
    component: ComponentCreator('/gnars-docs/markdown-page', '4d2'),
    exact: true
  },
  {
    path: '/gnars-docs/docs',
    component: ComponentCreator('/gnars-docs/docs', 'cfa'),
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
        path: '/gnars-docs/docs/Level-2/translate-your-site',
        component: ComponentCreator('/gnars-docs/docs/Level-2/translate-your-site', '61a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/docs/Level-3/manage-docs-versions',
        component: ComponentCreator('/gnars-docs/docs/Level-3/manage-docs-versions', '94b'),
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
