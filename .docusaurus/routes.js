import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/gnars-docs/fr/blog',
    component: ComponentCreator('/gnars-docs/fr/blog', '789'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/archive',
    component: ComponentCreator('/gnars-docs/fr/blog/archive', '9e6'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/first-blog-post',
    component: ComponentCreator('/gnars-docs/fr/blog/first-blog-post', 'acb'),
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
    path: '/gnars-docs/fr/blog/tags/docusaurus',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/docusaurus', 'a3b'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/facebook',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/facebook', '1a0'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/hello',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/hello', '5a9'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/tags/hola',
    component: ComponentCreator('/gnars-docs/fr/blog/tags/hola', '648'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/blog/welcome',
    component: ComponentCreator('/gnars-docs/fr/blog/welcome', 'f34'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/markdown-page',
    component: ComponentCreator('/gnars-docs/fr/markdown-page', '6ec'),
    exact: true
  },
  {
    path: '/gnars-docs/fr/docs',
    component: ComponentCreator('/gnars-docs/fr/docs', 'daa'),
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
        component: ComponentCreator('/gnars-docs/fr/docs/intro', 'a07'),
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
        path: '/gnars-docs/fr/docs/Level-2/translate-your-site',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-2/translate-your-site', 'f8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/gnars-docs/fr/docs/Level-3/manage-docs-versions',
        component: ComponentCreator('/gnars-docs/fr/docs/Level-3/manage-docs-versions', 'b4c'),
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
