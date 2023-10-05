import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gnars.wtf',
    Svg: require('@site/static/img/gnars.svg').default,
    description: (
      <>
        Our main website, you will find our auctions, governance ...
      </>
    ),
    link: 'https://gnars.wtf', // Replace with your desired URL
  },
  {
    title: 'ThatsGnar.ly',
    Svg: require('@site/static/img/gnars2.svg').default,
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
    title: '$ for $hredding',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        We prefer a world where kids aren't sold energy drinks by their heroes. So as a community of action sports enthusiasts, we've formed a DAO to rethink how extreme athletes get sponsored.
      </>
    ),
    link: 'https://example.com/sponsorship', // Replace with your desired URL
  },
  {
    title: '$ for $hredding',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        We prefer a world where kids aren't sold energy drinks by their heroes. So as a community of action sports enthusiasts, we've formed a DAO to rethink how extreme athletes get sponsored.
      </>
    ),
    link: 'https://example.com/sponsorship', // Replace with your desired URL
  },
  {
    title: '$ for $hredding',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        We prefer a world where kids aren't sold energy drinks by their heroes. So as a community of action sports enthusiasts, we've formed a DAO to rethink how extreme athletes get sponsored.
      </>
    ),
    link: 'https://example.com/sponsorship', // Replace with your desired URL
  },
  {
    title: '$ for $hredding',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        We prefer a world where kids aren't sold energy drinks by their heroes. So as a community of action sports enthusiasts, we've formed a DAO to rethink how extreme athletes get sponsored.
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
