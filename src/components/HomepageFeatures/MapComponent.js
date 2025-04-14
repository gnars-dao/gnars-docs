// MapComponent.js
import React, { useState } from 'react';
import useDynamicLeaflet from './useDynamicLeaflet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'leaflet/dist/leaflet.css';
import { locations } from './locations';

const MapComponent = ({ width = '100%', height = '500px', borderRadius = '0px', border = 'none' }) => {
    const { MapContainer, TileLayer, Marker, Popup, createIcon } = useDynamicLeaflet();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);

    const openModal = (images) => {
        setModalImages(images);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImages([]);
    };

    const position = [0, 0]; // Center of the map

    return (
        <>
            {MapContainer ? (
                <MapContainer center={position} zoom={2} scrollWheelZoom={false} style={{ height, width, borderRadius, border, zIndex: '1' }}>  
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
                    {locations.map(({ position, label, images, iconUrl, iconSize, zIndexOffset, opacity, proposal }, index) => (
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
                                    <div style={{ marginTop: '10px' }}>
                                        <strong>Context:</strong> {proposal && proposal.link ? (
                                            <a href={proposal.link} target="_blank" rel="noopener noreferrer">{proposal.name}</a>
                                        ) : (
                                            <span>Organic Proliferation</span>
                                        )}
                                    </div>
                                    <button 
                                        style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }} 
                                        onClick={() => openModal(images)}
                                    >
                                        View Photos
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            ) : (
                <div>Loading map...</div>
            )}
            {modalOpen && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000
                    }}
                >
                    <div 
                        style={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '1200px',
                            height: '80%',
                            backgroundColor: 'black',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <button 
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                background: 'red',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                zIndex: 1001
                            }} 
                            onClick={closeModal}
                        >
                            Close
                        </button>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop
                            useKeyboardArrows
                            dynamicHeight={false}
                        >
                            {modalImages.map((imageUrl, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                    <img
                                        src={imageUrl}
                                        alt={`Modal Image - ${i}`}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain', // Ensure images fit without cropping
                                            borderRadius: '5px'
                                        }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            )}
        </>
    );
};

export default MapComponent;
