// src/components/AiSettings/AiRegionPage.jsx
import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import "./AiRegionPage.css";

const DEFAULT_REGIONS = [
  "성남시 분당구 야탑동",
  "성남시 분당구 삼평동",
  "성남시 분당구 이매동",
  "성남시 분당구",
  "성남시",
  "가천대학교 글로벌 캠퍼스",
  "가천대학교 메디컬 캠퍼스",
  "가천대학교 강화 캠퍼스",
  "가천대학교 스타벅스",
  "가천대학교 가천관",
];

export default function AiRegionPage() {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [filtered, setFiltered] = useState(DEFAULT_REGIONS);
  const [selected, setSelected] = useState(null);
  const [noRegion, setNoRegion] = useState(false);

  // 입력값 필터링
  useEffect(() => {
    setFiltered(DEFAULT_REGIONS.filter((item) => item.includes(q)).slice(0, 5));
  }, [q]);

  return (
    <div className="ar-container">
      {/* 헤더 */}
      <header className="ar-header">
        <button
          type="button"
          className="ar-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="ar-title">나만의 AI 설정</h1>
      </header>

      {/* 본문 */}
      <div className="ar-content">
        <div className="ar-label-group">
          <span className="ar-label">나의 선호 지역을 선택해주세요</span>
          <label className="ar-checkbox-label">
            없음
            <input
              type="checkbox"
              checked={noRegion}
              onChange={() => {
                setNoRegion((prev) => !prev);
                setSelected(null);
              }}
            />
          </label>
        </div>

        <div className="ar-search">
          <div className="ar-search-input">
            <input
              type="text"
              placeholder="지역명을 입력하세요"
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setNoRegion(false);
              }}
            />
            <FiSearch />
          </div>

          {/* 항상 보이는 리스트 */}
          {!noRegion && (
            <ul className="ar-suggestions">
              {filtered.map((item) => (
                <li
                  key={item}
                  className={`ar-item ${selected === item ? "selected" : ""}`}
                  onClick={() => setSelected(item)}
                >
                  <span>{item}</span>
                  {selected === item && <AiOutlineCheck />}
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="ar-item no-result">검색 결과가 없습니다</li>
              )}
            </ul>
          )}
        </div>

        {/* 완료 버튼 */}
        <button
          type="button"
          className="ar-next-btn"
          onClick={() => {
            console.log("선호 지역:", noRegion ? "없음" : selected);
            navigate("/ai-results");
          }}
        >
          완료
        </button>
      </div>

      <BottomNav />
    </div>
  );
}
