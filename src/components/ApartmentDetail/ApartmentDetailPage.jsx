// src/components/ApartmentDetail/ApartmentDetailPage.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiBell, FiMessageCircle, FiStar } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBook } from "react-icons/ai";
import BottomNav from "../BottomNav/BottomNav";
import "./ApartmentDetailPage.css";

// 실제 파일명에 맞춰 assets에서 import 해주세요
import aptPhoto from "../../assets/Rose.jpg";
import avatarImg from "../../assets/avatar.jpg";

// 아파트 기본 정보
const BASIC_INFO = [
  { label: "주소", value: "경기도 성남시 분당구 장미로 55" },
  { label: "세대수", value: "1,134세대" },
  { label: "건설사", value: "동부건설(주)" },
  { label: "대지면적", value: "53,435.95㎡" },
  { label: "준공일", value: "1993년 2월 25일" },
  { label: "전화번호", value: "031-704-6738~9" },
  { label: "평형", value: "23 / 27 / 32 / 39 / 48㎡" },
  { label: "주차대수", value: "지상 441대, 지하 434대" },
  { label: "총 동수", value: "21개 동" },
];

// 리뷰 통계
const REVIEW_STATS = [
  { id: "env", label: "아파트 환경이 좋았어요!", score: 4.0, max: 5 },
  { id: "neighbor", label: "이웃 만족도가 좋았어요!", score: 2.0, max: 5 },
  { id: "infra", label: "주변 인프라 환경이 좋았어요!", score: 3.2, max: 5 },
];

// 샘플 리뷰 리스트
const SAMPLE_REVIEWS = [
  {
    id: 1,
    text: "장미동부 코오롱 아파트 좋아요!",
    subtitle: "리뷰",
    rating: 4,
    user: "Lisa Wilson",
    avatar: avatarImg,
  },
  {
    id: 2,
    text: "조용하고 깨끗해요!",
    subtitle: "리뷰",
    rating: 5,
    user: "John Kim",
    avatar: avatarImg,
  },
  {
    id: 3,
    text: "단지 시설이 잘 되어 있어요.",
    subtitle: "리뷰",
    rating: 3,
    user: "Emily Park",
    avatar: avatarImg,
  },
];

export default function ApartmentDetailPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { aptName, location: aptLocation } = state || {};
  const [tab, setTab] = useState("info");

  return (
    <div className="ad-container">
      {/* 상단 헤더 */}
      <header className="ad-header">
        <button type="button" className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <div className="ad-title-group">
          <h1 className="ad-title">{aptName}</h1>
          <p className="ad-location">{aptLocation}</p>
        </div>
        <div className="ad-icons">
          <FiBell
            className="icon"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/notifications")}
          />
          <FiMessageCircle className="icon" />
          <AiOutlineHeart className="icon" />
          <AiOutlineBook
            className="icon"
            onClick={() => navigate("/ai-settings")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </header>

      {/* 탭 네비 */}
      <nav className="ad-tabs">
        <button
          className={tab === "info" ? "active" : ""}
          onClick={() => setTab("info")}
        >
          정보
        </button>
        <button
          className={tab === "tx" ? "active" : ""}
          onClick={() => setTab("tx")}
        >
          실거래목록
        </button>
        <button
          className={tab === "review" ? "active" : ""}
          onClick={() => setTab("review")}
        >
          리뷰
        </button>
      </nav>

      {/* 탭별 콘텐츠 */}
      <div className="ad-content">
        {/* 정보 탭 */}
        {tab === "info" && (
          <>
            <div className="ad-image-wrapper">
              <img src={aptPhoto} alt={aptName} className="ad-image" />
            </div>
            <div className="card ad-basic-info">
              <h3>아파트 기본 정보</h3>
              <dl className="info-list">
                {BASIC_INFO.map(({ label, value }) => (
                  <React.Fragment key={label}>
                    <dt className="info-term">{label}</dt>
                    <dd className="info-desc">{value}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </>
        )}

        {/* 실거래목록 탭 */}
        {tab === "tx" && (
          <div className="card">
            <h3>실거래목록</h3>
            <p>실거래 목록 테이블.</p>
          </div>
        )}

        {/* 리뷰 탭 */}
        {tab === "review" && (
          <div className="review-tab">
            <div className="review-header">
              <div className="avg-rating">
                <FiStar className="star-icon" />
                <span className="avg-score">4.34</span>
                <span className="avg-count">(리뷰 1000개 평점)</span>
              </div>
            </div>
            <div className="review-stats">
              {REVIEW_STATS.map((stat) => {
                const pct = (stat.score / stat.max) * 100;
                return (
                  <div className="stat-item" key={stat.id}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-score">{stat.score.toFixed(1)}</span>
                    <div className="stat-bar">
                      <div
                        className="stat-bar-fill"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="review-list">
              {SAMPLE_REVIEWS.map((rev) => (
                <div className="review-card" key={rev.id}>
                  <div className="review-img-placeholder" />
                  <div className="review-body">
                    <h4 className="review-text">{rev.text}</h4>
                    <span className="review-subtitle">{rev.subtitle}</span>
                    <div className="review-meta">
                      <FiStar className="star-icon" />
                      <span className="review-rating">{rev.rating}</span>
                      <div className="review-user">
                        <img
                          src={rev.avatar}
                          alt={rev.user}
                          className="user-avatar"
                        />
                        <span className="user-name">{rev.user}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
