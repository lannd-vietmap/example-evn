import './marker-svg.css';
import React, { useEffect, useRef } from "react";
import * as vietmapGl from '@vietmap/vietmap-gl-js';
import "@vietmap/vietmap-gl-js/vietmap-gl.css";

function MarkerSVG() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const vietmap = { lng: 106.675477, lat: 10.758898 };
    const VIETMAP_API_KEY = "YOUR_API_KEY_HERE";
    const zoom = 14;

    const svgStringToImageSrc = (svgString) => {
        return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
      };

    const pin = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 85" fill="#0000ff">
        <path stroke-width="4" d="M 5,33.103579 C 5,17.607779 18.457,5 35,5 C 51.543,5 65,17.607779 65,33.103579 C 65,56.388679 40.4668,76.048179 36.6112,79.137779 C 36.3714,79.329879 36.2116,79.457979 36.1427,79.518879 C 35.8203,79.800879 35.4102,79.942779 35,79.942779 C 34.5899,79.942779 34.1797,79.800879 33.8575,79.518879 C 33.7886,79.457979 33.6289,79.330079 33.3893,79.138079 C 29.5346,76.049279 5,56.389379 5,33.103579 Z M 35.0001,49.386379 C 43.1917,49.386379 49.8323,42.646079 49.8323,34.331379 C 49.8323,26.016779 43.1917,19.276479 35.0001,19.276479 C 26.8085,19.276479 20.1679,26.016779 20.1679,34.331379 C 20.1679,42.646079 26.8085,49.386379 35.0001,49.386379 Z"></path>
      </svg>
    `;

    useEffect(() => {
        if (map.current) return;
    
        map.current = new vietmapGl.Map({
            container: mapContainer.current,
            style: "https://maps.vietmap.vn/mt/tm/style.json?apikey=" + VIETMAP_API_KEY,
            center: [vietmap.lng, vietmap.lat],
            zoom: zoom,
        });
    
        map.current.addControl(new vietmapGl.NavigationControl(), 'top-right');
    
        map.current.on("load", () => {
            const svgImage = new Image(35, 42); 
    
            svgImage.onload = () => {
              map.current.addImage("svg", svgImage);
    
              const coordinates = [vietmap.lng, vietmap.lat]; 
    
              map.current.addSource("single-point", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      geometry: {
                        type: "Point",
                        coordinates: coordinates,
                      },
                      properties: {},
                    },
                  ],
                },
              });
    
              map.current.addLayer({
                id: "point-layer",
                type: "symbol",
                source: "single-point",
                layout: {
                  "icon-image": "svg",
                  "icon-size": 1.0,
                  "icon-allow-overlap": true,
                  "icon-anchor": "bottom",
                  "icon-offset": [0, -10],
                },
              });
            };
    
          
            svgImage.src = svgStringToImageSrc(pin);
          });
    },[vietmap.lng, vietmap.lat, zoom]);
    
    return (
        <div
            ref={mapContainer}
            className="map">
        </div>
    );
}

export default MarkerSVG;
