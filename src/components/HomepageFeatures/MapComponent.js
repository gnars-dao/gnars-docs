// MapComponent.js
import React from 'react';
import useDynamicLeaflet from './useDynamicLeaflet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';
const MapComponent = ({ width = '100%', height = '500px', borderRadius = '0px', border = 'none' }) => {
    const { MapContainer, TileLayer, Marker, Popup, icon } = useDynamicLeaflet();

    const position = [0, 0]; // Center of the map
    const locations = [
        {
            position: [-22.903044816157887, -43.17337963607664],
            label: 'Praca XV',
            images: ["/rocknogles.gif", "/xvgroup.jpg", "/xv-mentex-fscrooks.png"]
        },
        {
            position: [33.81427083205093, -118.21369178292444],
            label: 'Silverado',
            images: ["/tom_silverdo.jpg", "/example-image2.jpg"]
        },
        {
            position: [41.965330396404994, -87.6638363963253],
            label: 'Chicago',
            images: ["/chicago.jpg", "/chicago.jpg"]
        },
        {
            position: [-30.017866183250845, -51.17985537072372],
            label: 'Iapi',
            images: ["/IAPI1.jpg", "/IAPI1.jpg"]
        },
        {
            position: [9.0820, 8.6753],
            label: 'Kenya',
            images: ["/kenya.jpg", "/kenya2.jpg"]
        },
        {
            position: [-23.4990518351234, -46.624191393782525],
            label: 'Sopa de Letras',
            images: ["/sopadeletras.png", "/sopadeletras.png", "/sopadeletras.png"]
        },
        {
            position: [-20.24901180535837, -42.029355475124554],
            label: 'Manhuaçu',
            images: ["/manhuacurail.png", "/another-image5.jpg"]
        },
        {
            position: [42.737274371776024, 140.9109422458354],
            label: 'Rusutsu Resort',
            images: ["/rutsujpg.jpg", "/another-image6.jpg", "/another-image7.jpg"]
        },
        {
            position: [33.71824554962641, -117.84727040288683],
            label: 'OC Ramp',
            images: ["/ocramp.png"]
        },
        {
            position: [6.243173184580065, -75.5966651104881],
            label: 'Medellin',
            images: ["/medellin.png", "https://ipfs.skatehive.app/ipfs/Qme5iX2KMzwnJyaP6ThqTWVd7WoU197cjuDZ6zpcxMtDfJ"]
        },
        {
            // london
            position: [51.52064675412003, -0.20505440289551358],
            label: 'London',
            images: ["/london.png", "/london2.png"]
        },
        {
            // argentina    
            position: [-34.584183310926065, -58.39040299272954],
            label: 'Argentina',
            images: ["/argentina1.jpg", "/argentina2.jpg"]
        }
    ];
    return MapContainer ? (
        <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={{ height: height, width: width, borderRadius: borderRadius, border: border, zIndex: '1' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {locations.map(({ position, label, images }, index) => (
                <Marker key={index} position={position} icon={icon}>
                    <Popup maxWidth={250} minWidth={150} autoPan={true}>
                        <div style={{ width: '200px', height: 'auto' }}>
                            <Carousel
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                useKeyboardArrows
                                dynamicHeight={true}
                            >
                                {images.map((imageUrl, i) => (
                                    <div key={i}>
                                        <img
                                            src={imageUrl}
                                            alt={`${label} - ${i}`}
                                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>


                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    ) : (
        <div>Loading map...</div>
    );
};

export default MapComponent;
