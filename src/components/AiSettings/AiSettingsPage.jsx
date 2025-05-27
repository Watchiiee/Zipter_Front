import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import { FiArrowLeft } from "react-icons/fi";
import "./AiSettingsPage.css";

export default function AiSettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    convenience: 50,
    transport: 50,
    park: 50,
    commute: 50,
    regionPref: 50,
  });

  const handleChange = (key) => (e) => {
    setSettings((prev) => ({ ...prev, [key]: parseInt(e.target.value) }));
  };

  return (
    <div className="ai-container">
      {/* 상단 헤더 */}
      <header className="ai-header">
        <button
          type="button"
          className="ai-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="ai-title">나만의 AI 설정</h1>
      </header>

      {/* 슬라이더 그룹 */}
      <div className="ai-content">
        {[
          { key: "convenience", label: "편의시설 (마트, 병원 등)" },
          { key: "transport", label: "교통 (지하철, 버스 정류장)" },
          { key: "park", label: "공원 접근성 (마트, 병원 등)" },
          { key: "commute", label: "직장 / 학교 거리" },
          { key: "regionPref", label: "지역 선호도" },
        ].map(({ key, label }) => (
          <div className="ai-slider-group" key={key}>
            <label className="ai-slider-label">
              {label}
              <span className="ai-slider-value">{settings[key]}</span>
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={settings[key]}
              onChange={handleChange(key)}
            />
          </div>
        ))}
      </div>

      {/* 다음 버튼 */}
      <button
        type="button"
        className="ai-next-btn"
        onClick={() => {
          // TODO: 설정 저장 후 다음 단계로
          console.log("AI settings:", settings);
          navigate("/ai-region");
        }}
      >
        다음
      </button>

      {/* 공통 하단 네비 */}
      <BottomNav />
    </div>
  );
}
