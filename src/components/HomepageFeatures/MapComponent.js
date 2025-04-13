// MapComponent.js
import React from 'react';
import useDynamicLeaflet from './useDynamicLeaflet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';
import { locations } from './locations';

const MapComponent = ({ width = '100%', height = '500px', borderRadius = '0px', border = 'none' }) => {
    const { MapContainer, TileLayer, Marker, Popup, createIcon } = useDynamicLeaflet();

    const position = [0, 0]; // Center of the map

    return MapContainer ? (
        <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={{ height, width, borderRadius, border, zIndex: '1' }}>  
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
            {locations.map(({ position, label, images, iconUrl, iconSize, zIndexOffset, opacity }, index) => (
                <Marker 
                    key={index} 
                    position={position} 
                    icon={createIcon(iconUrl, iconSize)} // Pass size to createIcon
                    zIndexOffset={zIndexOffset || 0} // Set zIndexOffset for the marker
                    opacity={opacity || 1} // Set opacity for the marker
                    eventHandlers={{
                        click: (e) => {
                            e.target._map.panTo(e.latlng, { animate: true }); // Change center without zooming out
                        }
                    }}
                >
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
