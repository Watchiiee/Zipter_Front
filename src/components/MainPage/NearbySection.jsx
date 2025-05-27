// src/components/MainPage/NearbySection.jsx
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import "./NearbySection.css";

const NearbySection = () => {
  // 예시: 나중에 API로 fetch해주세요
  const [points, setPoints] = useState([
    { id: 1, name: "아파트 A", lat: 37.5665, lng: 126.978 },
    { id: 2, name: "아파트 B", lat: 37.5651, lng: 126.9895 },
    { id: 3, name: "아파트 C", lat: 37.57, lng: 126.9768 },
  ]);

  // 지도 중심: 첫 번째 좌표 (points[0]) 혹은 기본값
  const center = points[0]
    ? { lat: points[0].lat, lng: points[0].lng }
    : { lat: 37.5665, lng: 126.978 };

  return (
    <section className="mp-nearby">
      <h2 className="mp-section-title">나의 근처 아파트 목록</h2>

      {/* 카카오맵 */}
      <Map
        center={center}
        level={4}
        style={{ width: "100%", height: "200px", borderRadius: "12px" }}
      >
        {points.map((apt) => (
          <MapMarker key={apt.id} position={{ lat: apt.lat, lng: apt.lng }}>
            {/* 툴팁이나 이름을 넣고 싶으면 여기에 */}
          </MapMarker>
        ))}
      </Map>
    </section>
  );
};

export default NearbySection;
