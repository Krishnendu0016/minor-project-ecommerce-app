import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const MapComponent = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });

        // Clean up on unmount
        return () => map.remove();
    }, []);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;
