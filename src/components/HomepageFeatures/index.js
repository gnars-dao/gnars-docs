import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'WTF is a DAO?',
    Svg: require('@site/static/img/gnars1.svg').default,
    description: (
      <>
        Learn WTF is this DAO thing about. And learn how it is changing the world.         WTF is ETH ? Can I buy wheels with it? Is Discord a BMX trick or some kind of food? 

      </>
    ),
  },
  {
    title: 'Get funded for your DIY project',
    Svg: require('@site/static/img/gnars2.svg').default,
    description: (
      <>
      Our community developed an enviroment that you can earn and get funded for shredding. We like to call proof of stoken. You just need to get everyone stoked !
      </>
    ),
  },
  {
    title: '$ for $hredding',
    Svg: require('@site/static/img/gnars3.svg').default,
    description: (
      <>
        We prefer a world where kids aren't sold energy drinks by their heroes. So as a community of action sports enthusiasts, we've formed a DAO to rethink how extreme athletes get sponsored. 
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
