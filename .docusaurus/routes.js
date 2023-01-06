import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'af4'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b66'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ae8'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '309'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '0d0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '45b'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '626'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '1df'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'df3'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '826'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '449'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2ee'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2b5'),
    routes: [
      {
        path: '/docs/category/-level-1---enter-gnarnia',
        component: ComponentCreator('/docs/category/-level-1---enter-gnarnia', '45b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/-level-2---welcome-to-club',
        component: ComponentCreator('/docs/category/-level-2---welcome-to-club', 'cc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/-level-3---gettin-gnarlier',
        component: ComponentCreator('/docs/category/-level-3---gettin-gnarlier', '616'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/how-do-i-get-first-gnar',
        component: ComponentCreator('/docs/Level-1/how-do-i-get-first-gnar', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/how-to-create-wallet',
        component: ComponentCreator('/docs/Level-1/how-to-create-wallet', '65a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/how-to-use-discord',
        component: ComponentCreator('/docs/Level-1/how-to-use-discord', '1b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/what-gnars-nft-can-do',
        component: ComponentCreator('/docs/Level-1/what-gnars-nft-can-do', 'd1e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/what-is-a-NFT',
        component: ComponentCreator('/docs/Level-1/what-is-a-NFT', 'dba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/what-is-ethereum',
        component: ComponentCreator('/docs/Level-1/what-is-ethereum', '7ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-2/2-1-verifying-your-gnar',
        component: ComponentCreator('/docs/Level-2/2-1-verifying-your-gnar', '8ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-2/translate-your-site',
        component: ComponentCreator('/docs/Level-2/translate-your-site', '130'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-3/manage-docs-versions',
        component: ComponentCreator('/docs/Level-3/manage-docs-versions', 'a8e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-3/translate-your-site',
        component: ComponentCreator('/docs/Level-3/translate-your-site', '5e1'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '147'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
