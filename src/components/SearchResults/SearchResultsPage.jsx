// src/components/SearchResults/SearchResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import BottomNav from "../BottomNav/BottomNav";
import "./SearchResultsPage.css";

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const address = state?.location || ""; // ex: "성남시 분당구 야탑동"

  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!address || !window.kakao) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const lat = parseFloat(result[0].y);
        const lng = parseFloat(result[0].x);
        setCenter({ lat, lng });
        setMarkers([{ id: result[0].address_name, lat, lng }]);
      }
    });
  }, [address]);

  return (
    <div className="sr-container">
      {/* 상단 헤더 */}
      <header className="sr-header">
        <button type="button" className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={20} color="#fff" />
        </button>
        <div className="search-bar">
          <input type="text" value={address} readOnly />
        </div>
      </header>

      {/* 지도 영역 */}
      <div className="sr-map">
        <Map
          center={center}
          level={4}
          style={{ width: "100%", height: "100%" }}
        >
          {markers.map((m) => (
            <MapMarker key={m.id} position={{ lat: m.lat, lng: m.lng }} />
          ))}
        </Map>
      </div>

      {/* 하단 버튼 */}
      <nav className="sr-bottom-nav">
        <button
          type="button"
          onClick={() => {
            // '야탑동 정보 확인' 클릭 시 NeighborhoodInfoPage로 이동
            navigate("/neighborhood", { state: { location: address } });
          }}
        >
          야탑동 정보 확인
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/apartment-detail", {
              state: {
                aptName: "장미동부 아파트",
                location: address,
              },
            });
          }}
        >
          단지 목록 확인
        </button>
      </nav>

      {/* 공통 하단 네비게이션 */}
      <BottomNav />
    </div>
  );
}
