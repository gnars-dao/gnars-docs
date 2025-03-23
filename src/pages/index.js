import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import { MendableSearchBar } from '@mendable/search';
import { MendableFloatingButton } from "@mendable/search"
import MapComponent from '../components/HomepageFeatures/MapComponent';
import BrowserOnly from '@docusaurus/BrowserOnly';

const style = { darkMode: false, accentColor: "#123456" }

const floatingButtonStyle = {
  color: "#000000",
  backgroundColor: "#fcd068",
  zIndex: 100000 // Add this line to ensure the dialog box is over other elements
}

const icon = (
  <img
    src={require('@site/static/img/brain.png').default}
    alt="Gnars Icon"
    style={{
      width: '80px',
      borderRadius: '50%',
      border: '3px solid black',
    }}
  />
);


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useDocusaurusContext();

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        backgroundColor: isDarkTheme ? '#333333' : '#fcd068',
        color: isDarkTheme ? '#ffffff' : '#000000',
      }}
    >
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            style={{
              border: '2px solid',
              borderColor: isDarkTheme ? '#ffffff' : '#000000',
            }}
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Nerd it up!
          </Link>
        </div>
        <center style={{ marginTop: '50px' }}>
          <BrowserOnly fallback={<div>Loading...</div>}>
            {() => (
              // Your component that includes client-specific code
              <MapComponent height="500px" width="100%" borderRadius="10px" border="2px solid black" />
            )}
          </BrowserOnly>
        </center>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Gnars Docs ">
      <HomepageHeader />
      <main>
        <div style={{ zIndex: 99999, position: 'fixed', top: 0, left: 0, right: 0 }}>
          <MendableFloatingButton icon={icon} anon_key='c08b6d38-b2b2-4ee9-abe5-34753f2fa9c2' style={style} floatingButtonStyle={floatingButtonStyle} />
        </div>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
