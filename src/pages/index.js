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
    style={{
      width: '80px', // Adjust the width to your desired size
      borderRadius: '50%', // Set the border radius to 50% for a circular shape
      border: '3px solid black', // Add a black border with a width of 1px
    }}
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
          <Link   style={{ border: '2px solid black' }}
 className="button button--secondary button--lg" to="/docs/intro">
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
                                                                       
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
