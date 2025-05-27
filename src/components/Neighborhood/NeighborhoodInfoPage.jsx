import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaUsers, FaDollarSign } from "react-icons/fa";
import BottomNav from "../BottomNav/BottomNav";
import "./NeighborhoodInfoPage.css";

const NeighborhoodInfoPage = () => {
  const navigate = useNavigate();

  // 예시 데이터
  const population = 25000;
  const avgSale = 9.2; // 단위: 억
  const avgJeonse = 5.7; // 단위: 억
  const avgRent = 90; // 단위: 만원

  // 진행바 % 계산 (매매 0~15억, 전세 0~10억 라고 가정)
  const salePct = Math.min((avgSale / 15) * 100, 100);
  const jeonsePct = Math.min((avgJeonse / 10) * 100, 100);

  return (
    <div className="ni-container">
      {/* 상단 헤더 */}
      <header className="ni-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={20} color="#fff" />
        </button>
        <h1 className="ni-title">야탑동 정보</h1>
        <button className="bookmark-btn">
          {/* 즐겨찾기 아이콘 넣으세요 */}
        </button>
      </header>

      <div className="ni-content">
        <h2 className="ni-subtitle">야탑동은 어떤 동네인가요?</h2>
        <div className="ni-location">
          <FiMapPin className="loc-icon" />
          <span>위치: 성남시 분당구 야탑동</span>
        </div>

        {/* 카드 그룹 */}
        <div className="ni-cards">
          {/* 인구수 */}
          <div className="ni-card">
            <FaUsers className="card-icon" />
            <div className="card-body">
              <div className="card-label">인구수</div>
              <div className="card-value">{population.toLocaleString()}명</div>
            </div>
          </div>

          {/* 매매 평균 */}
          <div className="ni-card">
            <FaDollarSign className="card-icon" />
            <div className="card-body">
              <div className="card-label">매매 평균 가격</div>
              <div className="card-value">{avgSale}억</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${salePct}%` }}
                />
              </div>
            </div>
          </div>

          {/* 전세 평균 */}
          <div className="ni-card">
            <FaDollarSign className="card-icon" />
            <div className="card-body">
              <div className="card-label">전세 평균 가격</div>
              <div className="card-value">{avgJeonse}억</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${jeonsePct}%` }}
                />
              </div>
            </div>
          </div>

          {/* 월세 평균 */}
          <div className="ni-card">
            <FiCalendar className="card-icon" />
            <div className="card-body">
              <div className="card-label">월세 평균 가격</div>
              <div className="card-value">{avgRent}만원</div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <nav className="ni-action-nav">
        <button
          onClick={() => {
            /* 야탑동 상세 로직 */
          }}
        >
          야탑동 정보 확인
        </button>
        <button
          onClick={() => {
            /* 단지 목록 로직 */
          }}
        >
          단지 목록 확인
        </button>
      </nav>

      {/* 공통 하단 네비게이션 */}
      <BottomNav />
    </div>
  );
};

export default NeighborhoodInfoPage;
