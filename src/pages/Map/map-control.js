import "./map-control.css";
import React, { useEffect, useRef } from "react";
import * as vietmapGl from "@vietmap/vietmap-gl-js";
import "@vietmap/vietmap-gl-js/vietmap-gl.css";

function MapControl() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const vietmap = { lng: 106.675477, lat: 10.758898 };
  const VIETMAP_API_KEY = "YOUR_API_KEY_HERE";
  const zoom = 14;

  useEffect(() => {
    map.current = new vietmapGl.Map({
      container: mapContainer.current,
      style:
        "https://maps.vietmap.vn/mt/tm/style.json?apikey=" + VIETMAP_API_KEY,
      center: [vietmap.lng, vietmap.lat],
      zoom: zoom,
    });
    map.current.addControl(new vietmapGl.NavigationControl(), "top-right");

    const markerElementPng = document.createElement("div");
    markerElementPng.className = "custom-marker-png";
    map.current.on("zoom", () => {
        console.log("Map zoom level changed");
        // log current zoom level
        console.log(map.current.getZoom());
      });
    new vietmapGl.Marker({
      element: markerElementPng,
      anchor: "bottom",
    })
      .setLngLat([106.67547751224498, 10.758898464351262])
      .addTo(map.current);
  }, [vietmap.lng, vietmap.lat, zoom]);
  // add on map change event
  
  const handleButton1Click = () => {
    map.current.flyTo({
      center: [106.67547751224498, 10.758898464351262],
      zoom: 16,
      essential: true,
      pitch: 45,
      speed: 1.2,
      screenSpeed: 1.2,
      bearing: 45.6,
      duration:5000
    });
  };

  const handleButton2Click = () => {
    map.current.easeTo({
      center: [106.87547751224498, 10.358898464351262],
      zoom: 10,
      pitch: 0,
      bearing: 0,
      duration: 7000,
      essential: true,
    });
  };
  return (
    <div>
      <div ref={mapContainer} className="map"></div>
      <button onClick={handleButton1Click} className="map-button">
        Move camera
      </button>

      <button onClick={handleButton2Click} className="map-button">
        Move camera 2
      </button>
    </div>
  );
}

export default MapControl;
