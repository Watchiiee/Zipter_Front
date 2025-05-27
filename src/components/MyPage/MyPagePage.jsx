// src/components/MyPage/MyPagePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";
import BottomNav from "../BottomNav/BottomNav";
import "./MyPagePage.css";

export default function MyPagePage() {
  const navigate = useNavigate();
  return (
    <div className="mpg-container">
      {/* 상단 헤더 */}
      <header className="mpg-header">
        <button
          type="button"
          className="mpg-back-btn"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft size={24} color="#fff" />
        </button>
        <h1 className="mpg-title">마이페이지</h1>
      </header>

      {/* 프로필 섹션 */}
      <div className="mpg-profile">
        <div className="mpg-avatar" />
        <div className="mpg-userinfo">
          <strong className="mpg-username">단단한집</strong>
          <span className="mpg-email">useno@examail.com</span>
        </div>
        <AiOutlineSetting className="mpg-settings" />
      </div>

      {/* 메뉴 리스트 */}
      <ul className="mpg-menu">
        <li>
          <span>개인정보 수정하기</span>
          <FiChevronRight />
        </li>
        <li>
          <span>추천 가중치 수정하기</span>
          <FiChevronRight />
        </li>
        <li>
          <span>나의 관심 목록</span>
          <FiChevronRight />
        </li>
        <li>
          <span>나의 알림 목록</span>
          <FiChevronRight />
        </li>
        <li>
          <span>나의 리뷰 목록</span>
          <FiChevronRight />
        </li>
        <li>
          <span>나의 질문</span>
          <FiChevronRight />
        </li>
      </ul>

      {/* 버전 정보 카드 */}
      <div className="mpg-card version-card">
        <span>현재 앱 버전 1.0.0</span>
        <span>최신 버전 입니다.</span>
      </div>

      {/* SNS 링크 */}
      <div className="mpg-sns">
        <button>인스타그램</button>
        <button>공식 사이트</button>
        <button>페이스북</button>
        <button>카카오톡 채널</button>
        <button>깃허브</button>
      </div>

      {/* 하단 링크 & 버튼 */}
      <div className="mpg-footer-links">
        <a href="#!">이용약관</a>
        <span>·</span>
        <a href="#!">개인정보 처리방침</a>
        <span>·</span>
        <a href="#!">회사 소개</a>
      </div>
      <div className="mpg-contact-buttons">
        <button type="button">고객센터</button>
        <button type="button">광고 문의</button>
      </div>

      <BottomNav />
    </div>
  );
}
