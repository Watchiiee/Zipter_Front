// src/components/AiSettings/AiRecommendationPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import BottomNav from "../BottomNav/BottomNav";
import "./AiRecommendationPage.css";

const SAMPLE_RESULTS = [
  {
    id: 1,
    name: "아이파크 (현대아이파크)",
    info: "성남시 분당구 야탑동 | 평균가격 8억",
  },
  {
    id: 2,
    name: "장미마을8단지 현대",
    info: "성남시 분당구 야탑동 | 평균가격 12억",
  },
  {
    id: 3,
    name: "탑마을5단지 타워빌",
    info: "성남시 분당구 야탑동 | 평균가격 15억",
  },
  {
    id: 4,
    name: "장미동부 코오롱 아파트",
    info: "성남시 분당구 야탑동 | 평균가격 9억",
  },
  {
    id: 5,
    name: "탑마을6단지 벽산",
    info: "성남시 분당구 야탑동 | 평균가격 7억",
  },
  {
    id: 6,
    name: "탑마을2단지 대우",
    info: "성남시 분당구 야탑동 | 평균가격 8.5억",
  },
  {
    id: 7,
    name: "탑마을7단지 경남",
    info: "성남시 분당구 야탑동 | 평균가격 6억",
  },
  {
    id: 8,
    name: "장미마을1단지 코오롱",
    info: "성남시 분당구 야탑동 | 평균가격 5.5억",
  },
];
export default function AiRecommendationPage() {
  const navigate = useNavigate();

  return (
    <div className="arrec-container">
      {/* 헤더 */}
      <header className="arrec-header">
        <button
          type="button"
          className="arrec-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="arrec-title">AI 추천 결과</h1>
        <p className="arrec-subtitle">
          집터의 AI가 당신만을 위한 아파트 목록을 추천합니다.
        </p>
      </header>

      {/* 추천 리스트 */}
      <div className="arrec-content">
        <div className="arrec-count">
          추천 결과 리스트 ({SAMPLE_RESULTS.length}개)
        </div>
        <ul className="arrec-list">
          {SAMPLE_RESULTS.map((apt) => (
            <li
              key={apt.id}
              className="arrec-item"
              onClick={() => {
                /* 원하시면 클릭 시 상세페이지로 네비게이트 */
              }}
            >
              <div className="arrec-thumb" />
              <div className="arrec-info">
                <strong className="arrec-name">{apt.name}</strong>
                <span className="arrec-meta">
                  {apt.info} | {apt.avgPrice}
                </span>
              </div>
              <FiChevronRight className="arrec-chevron" />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="arrec-done-btn"
          onClick={() => navigate("/main")}
        >
          완료
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
