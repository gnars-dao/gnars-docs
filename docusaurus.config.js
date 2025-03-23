// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&display=swap'
  ],

  title: 'Gnars Center ⌐◨-◨',
  tagline: 'Gnars Community onboarding Docs.',
  url: 'https://gnarsdao.vercel.app',

  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gnars-dao', // Usually your GitHub org/user name.
  projectName: 'gnars-dao.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'pt-br', 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gnars-dao/gnars-dao.github.io/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gnars-dao/gnars-dao.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),

        },

      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'description', content: 'Gnars Community onboarding Docs.' },
        { name: 'keywords', content: 'gnars, dao, gnarsdao, skateboarding, web3, community, nft, gnarly, gnars.com' },
        { property: 'og:title', content: 'Gnars Center ⌐◨-◨ | Community Onboarding & Governance' },
        { property: 'og:description', content: 'Explore the Gnars DAO: Your hub for community onboarding, governance, and all things gnarly in the web3 skateboarding realm.' },
        { property: 'og:image', content: 'img/thatsgnarly.svg' },
        { property: 'og:url', content: 'https://gnars.center' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@gnarsdao' },
        { name: 'twitter:creator', content: '@gnarsdao' },
        { name: 'twitter:title', content: 'Gnars Center ⌐◨-◨ | Community Onboarding & Governance' },
        { name: 'twitter:description', content: 'Explore the Gnars DAO: Your hub for community onboarding, governance, and all things gnarly in the web3 skateboarding realm.' },
        { name: 'twitter:image', content: 'https://gnars.com/images/01-2.jpg' },
        { name: 'twitter:image:alt', content: 'Gnars DAO Logo' },
      ],
      navbar: {
        title: 'Gnars',
        logo: {
          alt: 'GNARS logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
            emoji: '👍',
          },
          /**        {
                      to: '/blog',
                      label: '🛹 Trickpedia',
                      position: 'left'},
          */
          {
            href: 'https://github.com/gnars-dao/gnars-dao.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Projects',
            position: 'left',
            items: [
              {
                label: 'Noggles Rail',
                href: 'https://drive.google.com/drive/folders/1fbC8TjzBXGSze6Wgn61ex-SiprJlPKnk'
              },
              {
                label: 'Skatehive',
                href: 'https://skatehive.app'
              },
              {
                label: 'Alps DAO',
                href: 'https://opensea.io/collection/gnars-v2'
              }
            ]
          },
          {
            type: 'dropdown',
            label: 'Get a Gnar NFT',
            position: 'left',
            items: [
              {
                label: 'Auctions',
                href: 'https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17/5764?tab=about'
              },
              {
                label: 'OpenSea',
                href: 'https://opensea.io/collection/gnars-dao'
              }
            ]
          },
          // {
          //   type: 'dropdown',
          //   label: 'Games',
          //   position: 'left',
          //   items: [
          //     {
          //       label: 'Quest For Stoken',
          //       href: 'https://stoken.quest/'
          //     },
          //     {
          //       label: 'Grinderz',
          //       href: 'https://gnars.fun/'
          //     }
          //   ]
          // }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //     {
          //       label: "Charmverse",
          //       href: "https://app.charmverse.io/share/gnars/page-9870330106092746"
          //     }
          //   ],
          // },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/gnars',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gnars_dao',
              },
              {
                label: 'Governance',
                href: 'https://nouns.build/dao/base/0x880fb3cf5c6cc2d7dfc13a993e839a9411200c17/5764?tab=activity'
              }
            ],
          },
          {
            title: 'Shred to Earn',
            items: [
              {
                label: 'Farcaster',
                href: 'https://nounspace.com/s/gnars',
              },
              {
                label: 'Skatehive App',
                href: 'https://skatehive.app',
              },
              {
                label: 'Stoken.wtf',
                href: 'https://stoken.wtf',
              },

            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/gnars-dao/gnars-dao.github.io',
              },
              {
                label: 'Gnars.com',
                href: 'https://gnars.com',
              }
            ],
          },
        ],
        copyright: `Copyright © is a lie. Built with Weed`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,  // Set to true if you want to disable the light/dark switch button
        respectPrefersColorScheme: false,  // Set to true if you want to respect the user's system setting
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
