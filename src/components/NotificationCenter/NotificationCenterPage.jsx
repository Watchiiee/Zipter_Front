// src/components/NotificationCenter/NotificationCenterPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiMoreHorizontal } from "react-icons/fi";
import BottomNav from "../BottomNav/BottomNav";
import "./NotificationCenterPage.css";

const SAMPLE_NOTIFICATIONS = [
  { id: 1, title: "장미동부 아파트 32평 - 매매가 8억", time: "1분 전" },
  { id: 2, title: "분당구 가격이 급락하고 있어요", time: "5시간 전" },
  { id: 3, title: "정자동 힐스테이트 전세 5억에 급매", time: "17시간 전" },
  { id: 4, title: "서현동 리모델링 추진 중인 아파트 모음", time: "1일 전" },
  { id: 5, title: "수내동 전세가 하락세, 투자 기회?", time: "3일 전" },
  { id: 6, title: "정자역 역세권 단지 분양 소식", time: "5일 전" },
  { id: 7, title: "판교 인근 30평대 실거래가 공개", time: "6일 전" },
  // …필요한 만큼 더…
];

export default function NotificationCenterPage() {
  const navigate = useNavigate();

  return (
    <div className="nc-container">
      <header className="nc-header">
        <button type="button" className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="nc-title">알림센터</h1>
      </header>

      <div className="nc-content">
        <h2 className="nc-subtitle">최근 7일</h2>
        <ul className="nc-list">
          {SAMPLE_NOTIFICATIONS.map((n) => (
            <li key={n.id} className="nc-item">
              <div className="nc-item-icon" /> {/* 후에 아이콘/썸네일 교체 */}
              <span className="nc-item-title">{n.title}</span>
              <span className="nc-item-time">{n.time}</span>
              <FiMoreHorizontal className="nc-item-more" />
            </li>
          ))}
        </ul>
      </div>

      <BottomNav />
    </div>
  );
}
