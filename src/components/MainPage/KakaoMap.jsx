// src/components/MainPage/KakaoMap.jsx
import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ center, level = 4, markers = [] }) => {
  return (
    <Map
      center={center}
      style={{ width: "100%", height: "200px" }}
      level={level}
    >
      {markers.map((m) => (
        <MapMarker key={m.id} position={{ lat: m.lat, lng: m.lng }} />
      ))}
    </Map>
  );
};

export default KakaoMap;
