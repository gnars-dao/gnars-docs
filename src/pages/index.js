import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { MendableSearchBar } from '@mendable/search';
import { MendableFloatingButton } from "@mendable/search"

const style = { darkMode: false, accentColor: "#123456" }

const floatingButtonStyle = {
    color: "#000000",
    backgroundColor: "#ffe762"
}

const icon = (
  <img
    src={require('@site/static/img/brain.png').default}
    alt="Gnars Icon"
    style={{ width: '100px' }} // Adjust the width to your desired size
  />
);


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Nerd it up!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <MendableFloatingButton icon={icon} anon_key='c08b6d38-b2b2-4ee9-abe5-34753f2fa9c2' style={style} floatingButtonStyle={floatingButtonStyle} /> 
      <main>
        <MendableSearchBar anon_key="c08b6d38-b2b2-4ee9-abe5-34753f2fa9c2" style={{ margin: '2rem auto',
                                                                                    maxWidth: '800px', 
                                                                                    placeholder:'Ask our AI anything about Gnars',
                                                                                    botIcon: "<img src='static/img/brain.png'></img>" }} />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
