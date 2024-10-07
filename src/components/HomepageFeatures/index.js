'use client'
import BrowserOnly from '@docusaurus/BrowserOnly';
import clsx from 'clsx';
import React from 'react';
import MapComponent from './MapComponent';
import styles from './styles.module.css';
const FeatureList = [
  {
    title: 'Gnars.wtf',
    Svg: require('@site/static/img/thatsgnarly.svg').default,
    description: (
      <>
        Our main website, you will find our auctions, governance ...
      </>
    ),
    link: 'https://gnars.wtf', // Replace with your desired URL
  },
  // {
  //   title: 'ThatsGnar.ly',
  //   Svg: require('@site/static/img/thatsgnarly.svg').default,
  //   description: (
  //     <>
  //       Our 3.0 Social Media
  //     </>
  //   ),
  //   link: 'https://thatsgnar.ly', // Replace with your desired URL
  // },
  // {
  //   title: 'Settle.wtf',
  //   Svg: require('@site/static/img/unborn.svg').default,
  //   description: (
  //     <>
  //       Preview the next Gnar to auction before clicking Settle!      </>
  //   ),
  //   link: 'https://settle.wtf', // Replace with your desired URL
  // },
  {
    title: 'Noggles Rail Guide',
    Svg: require('@site/static/img/oclin.svg').default,
    description: (
      <>
        Open 3D project of The Nounstacle
      </>
    ),
    link: 'https://zora.co/collect/base:0xc7352d44714c99e0f901d3ed00e9bdb275f5412d?referrer=0x41CB654D1F47913ACAB158a8199191D160DAbe4A',
  },
  {
    title: 'Farcaster',
    Svg: require('@site/static/img/farcaster.svg').default,
    description: (
      <>
        Our Farcaster Channel
      </>
    ),
    link: 'https://nounspace.com/s/gnars',
  },
  {
    title: 'Skatehive App',
    Svg: require('@site/static/img/skatehive.svg').default,
    description: (
      <>
        The portal of web3 skateboarding
      </>
    ),
    link: 'https://skatehive.app',
  },
  {
    title: 'ThatsGnar.ly',
    Svg: require('@site/static/img/thatsgnarly.svg').default,
    description: (
      <>
        Post a video or image of you sharedding and earn with Gnars

      </>
    ),
    link: 'https://thatsgnar.ly',
  },
  {
    title: 'Gnarly News',
    Svg: require('@site/static/img/gnarly-news.svg').default,
    description: (
      <>
        Weekly News about Gnars in Paragraph
      </>
    ),
    link: 'https://paragraph.xyz/@gnars',
  },

  // {
  //   title: 'GnarSauce',
  //   Svg: require('@site/static/img/gnarsauce.svg').default,
  //   description: (
  //     <>
  //       Spicy and Gnarly
  //     </>
  //   ),
  //   link: 'https://thatsgnar.ly/thatsgnarly/shop/gnarssauce',
  // },
];



function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.featureLink}>
        <div className="text--center blackAndWhite">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>

      <section className={styles.features}>

        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <center>
        <br />
        <h1>Noggles Rails around the World</h1>

      </center >
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          // Your component that includes client-specific code
          <MapComponent />
        )}
      </BrowserOnly>
    </>
  );
}
