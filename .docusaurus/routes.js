import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'fc7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '592'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '37f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'cd1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6c4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f4b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3fc'),
    exact: true
  },
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
    component: ComponentCreator('/docs', '645'),
    routes: [
      {
        path: '/docs/category/level-1---enter-gnarnia',
        component: ComponentCreator('/docs/category/level-1---enter-gnarnia', '9b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/level-2---welcome-to-club',
        component: ComponentCreator('/docs/category/level-2---welcome-to-club', '23a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/level-3---gettin-gnarlier',
        component: ComponentCreator('/docs/category/level-3---gettin-gnarlier', 'aab'),
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
        path: '/docs/Level-1/congratulations',
        component: ComponentCreator('/docs/Level-1/congratulations', '99c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/create-a-blog-post',
        component: ComponentCreator('/docs/Level-1/create-a-blog-post', 'd7b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/deploy-your-site',
        component: ComponentCreator('/docs/Level-1/deploy-your-site', 'c43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Level-1/markdown-features',
        component: ComponentCreator('/docs/Level-1/markdown-features', '527'),
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
        path: '/docs/Level-2/manage-docs-versions',
        component: ComponentCreator('/docs/Level-2/manage-docs-versions', '438'),
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
