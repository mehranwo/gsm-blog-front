"use client";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";

mapboxgl.accessToken = "mehran";

mapboxgl.setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  (error) => {
    console.log(error);
  },
  true // Lazy load the plugin
);

const MyMap = () => {
  const center = {
    lat: 35.778624,
    lng: 51.415675,
  };

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "https://tile.snappmaps.ir/styles/snapp-style/style.json",
      center: [center.lng, center.lat], //[lng , lat]
      zoom: 15,
    });

    new mapboxgl.Marker({ color: "red" })
      .setLngLat([center.lng, center.lat])
      .addTo(map);
  }, [center]);

  return (
    <div className="w-full h-full">
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </div>
  );
};

export default MyMap;
