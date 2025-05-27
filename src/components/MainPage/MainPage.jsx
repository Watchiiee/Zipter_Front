// components/MainPage/MainPage.jsx
import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import NearbySection from "./NearbySection";
import ActionButtons from "./ActionButtons";
import AdBanner from "./AdBanner";
import PopularSection from "./PopularSection";
import BottomNav from "../BottomNav/BottomNav";
import "./MainPage.css";

const MainPage = () => {
  const handleAction = (type) => {
    console.log("액션:", type);
    // TODO: 라우팅 or 모달 띄우기
  };

  const handleSearch = (query) => {
    console.log("검색어:", query);
    // TODO: 검색 결과 페이지로 이동
  };

  return (
    <div className="main-container">
      <div className="main-top">
        <Header />
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="main-content">
        <NearbySection />
        <ActionButtons onClick={handleAction} />
        <AdBanner />
        <PopularSection />
      </div>

      <BottomNav />
    </div>
  );
};

export default MainPage;
