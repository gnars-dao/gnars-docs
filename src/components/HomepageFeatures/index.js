import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'WTF is a DAO?',
    Svg: require('@site/static/img/gnars1.svg').default,
    description: (
      <>
        Learn WTF is this DAO thing about. And learn how it is changing the world
      </>
    ),
  },
  {
    title: 'How to Get some ETH for shredding',
    Svg: require('@site/static/img/gnars2.svg').default,
    description: (
      <>
        WTF is ETH ? Can I buy wheels with it? Is Discord a BMX trick or some kind of food? 
      </>
    ),
  },
  {
    title: '',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
