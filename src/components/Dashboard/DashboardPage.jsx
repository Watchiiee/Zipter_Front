// src/components/Dashboard/DashboardPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import BottomNav from "../BottomNav/BottomNav";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./DashboardPage.css";

const priceData = [
  { month: "2024.07", value: 900 },
  { month: "2024.08", value: 800 },
  { month: "2024.09", value: 850 },
  { month: "2024.10", value: 700 },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="db-container">
      {/* 상단 헤더 */}
      <header className="db-header">
        <button
          type="button"
          className="db-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="db-title">나의 대시보드</h1>
      </header>

      {/* 아파트 가격 변동 차트 */}
      <section className="db-section">
        <h2 className="db-section-title">나의 아파트 가격 변동</h2>
        <div className="db-chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2a2d8f"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* 관심 지역 가격 */}
      <section className="db-section">
        <h2 className="db-section-title">관심 지역 가격</h2>
        <div className="db-cards">
          <div className="db-card">
            <span className="db-card-dot" style={{ background: "#2a2d8f" }} />
            <div>
              <p className="db-card-label">매매 평균 가격</p>
              <p className="db-card-value">13억</p>
            </div>
          </div>
          <div className="db-card">
            <span className="db-card-dot" style={{ background: "#41a7ff" }} />
            <div>
              <p className="db-card-label">월세 평균 가격</p>
              <p className="db-card-value">40만원</p>
            </div>
          </div>
          <div className="db-card">
            <span className="db-card-dot" style={{ background: "#ffa041" }} />
            <div>
              <p className="db-card-label">전세 평균 가격</p>
              <p className="db-card-value">7억</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI 추천 아파트 목록 */}
      <section className="db-section">
        <h2 className="db-section-title">집터 AI로 추천한 아파트 목록</h2>
        <div className="db-ai-list">
          {["장미동부 현대", "장미동부 코오롱", "장미동부 푸르지오"].map(
            (name, idx) => (
              <div key={idx} className="db-ai-card">
                <div className="db-ai-thumb" />
                <div className="db-ai-info">
                  <strong>{name}</strong>
                  <p>성남시 분당구 야탑동 | 평균 가격 · 9억</p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default DashboardPage;
