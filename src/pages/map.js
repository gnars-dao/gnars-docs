import React from 'react';
import MapComponent from '@site/src/components/HomepageFeatures/MapComponent';
import styles from './map.module.css';

const MapPage = () => {
    return (
        <div className={styles.mapContainer}>
            <MapComponent width="100vw" height="100vh" />
        </div>
    );
};

export default MapPage;
