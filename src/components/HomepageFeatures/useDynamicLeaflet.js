// useDynamicLeaflet.js
import { useEffect, useState } from 'react';

const useDynamicLeaflet = () => {
    const [leaflet, setLeaflet] = useState({
        MapContainer: null,
        TileLayer: null,
        Marker: null,
        Popup: null,
        createIcon: null,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Dynamically import the Leaflet components and L object
            Promise.all([
                import('react-leaflet'),
                import('leaflet/dist/leaflet.css'), // This import is side-effectful. Webpack will split this into a separate chunk.
                import('leaflet'),
            ]).then(([reactLeaflet, _, L]) => {
                const defaultIconUrl = "/nogglesRail3D.png";
                const defaultIconSize = [40, 40]; // Default size

                const createIcon = (iconUrl, size) => {
                    const finalSize = size || defaultIconSize;
                    return new L.Icon({
                        iconUrl: iconUrl || defaultIconUrl,
                        iconRetinaUrl: iconUrl || defaultIconUrl,
                        iconAnchor: [finalSize[0] / 2, finalSize[1]], // Adjust anchor based on size
                        popupAnchor: [0, -finalSize[1]], // Adjust popup anchor based on size
                        iconSize: new L.Point(finalSize[0], finalSize[1]),
                    });
                };

                setLeaflet({
                    MapContainer: reactLeaflet.MapContainer,
                    TileLayer: reactLeaflet.TileLayer,
                    Marker: reactLeaflet.Marker,
                    Popup: reactLeaflet.Popup,
                    createIcon, // Function to create icons dynamically
                });
            });
        }
    }, []);

    return leaflet;
};

export default useDynamicLeaflet;
