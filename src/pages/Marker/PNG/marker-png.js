import './marker-png.css';
import React, { useEffect, useRef } from "react";
import * as vietmapGl from '@vietmap/vietmap-gl-js';
import "@vietmap/vietmap-gl-js/vietmap-gl.css";

function MarkerPNG() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const vietmap = { lng: 106.675477, lat: 10.758898 };
    const VIETMAP_API_KEY = "YOUR_API_KEY_HERE";
    const zoom = 14;

    useEffect(() => {
        map.current = new vietmapGl.Map({
            container: mapContainer.current,
            style: "https://maps.vietmap.vn/mt/tm/style.json?apikey=" + VIETMAP_API_KEY,
            center: [vietmap.lng, vietmap.lat],
            zoom: zoom,
        });
        map.current.addControl(new vietmapGl.NavigationControl(), 'top-right');

        const markerElementPng = document.createElement('div');
        markerElementPng.className = 'custom-marker-png';

        new vietmapGl.Marker({
            element: markerElementPng,
            anchor: 'bottom'
        })
            .setLngLat([106.67547751224498, 10.758898464351262])
            .addTo(map.current);

    },[vietmap.lng, vietmap.lat, zoom]);

    return (
        <div
            ref={mapContainer}
            className="map">
        </div>
    );
}

export default MarkerPNG;
