import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gnars.wtf',
    Svg: require('@site/static/img/auction-chart.svg').default,
    description: (
      <>
        Our main website, you will find our auctions, governance ... 
      </>
    ),
    link: 'https://gnars.wtf', // Replace with your desired URL
  },
  {
    title: 'ThatsGnar.ly',
    Svg: require('@site/static/img/thatsgnarly.svg').default,
    description: (
      <>
        Our 3.0 Social Media
      </>
    ),
    link: 'https://thatsgnar.ly', // Replace with your desired URL
  },
  {
    title: 'Settle.wtf',
    Svg: require('@site/static/img/unborn.svg').default,
    description: (
      <>
Preview the next Gnar to auction before clicking Settle!      </>
    ),
    link: 'https://settle.wtf', // Replace with your desired URL
  },
  {
    title: 'Gnarly News',
    Svg: require('@site/static/img/gnarly-news.svg').default,
    description: (
      <>
      Weekly News about Gnars 
      </>
    ),
    link: 'https://gnarly.news/subscribe', // Replace with your desired URL
  },
  {
    title: 'Nounstacle',
    Svg: require('@site/static/img/oclin.svg').default,
    description: (
      <>
      Open 3D project of The Nounstacle
      </>
    ),
    link: 'https://drive.google.com/drive/folders/1fbC8TjzBXGSze6Wgn61ex-SiprJlPKnk', // Replace with your desired URL
  },
  {
    title: 'Skatehive App',
    Svg: require('@site/static/img/skatehive.svg').default,
    description: (
      <>
      The portal of web3 skateboarding
      </>
    ),
    link: 'https://chrome.google.com/webstore/detail/settle-or-die/ciabjlofbbflnnjocnbgidbhfnddijpm', // Replace with your desired URL
  },
  {
    title: 'Quest 4 Stoken',
    Svg: require('@site/static/img/QFS.svg').default,
    description: (
      <>
      Play to earn video game on Hive Blockchain, brought to you by SKATEHIVE and Gnars DAO

      </>
    ),
    link: 'https://example.com/sponsorship', // Replace with your desired URL
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link} className={styles.featureLink}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
