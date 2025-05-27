// src/components/BottomNav/BottomNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineEnvironment,
  AiOutlineUser,
} from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import "./BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <nav className="bottom-nav">
      {/* 홈 버튼 클릭 시 /main 으로 이동 */}
      <button
        type="button"
        className="nav-item"
        onClick={() => navigate("/main")}
      >
        <AiOutlineHome className="nav-icon" />
        <span className="nav-label">홈</span>
      </button>

      <button type="button" className="nav-item">
        <AiOutlineHeart className="nav-icon" />
        <span className="nav-label">관심목록</span>
      </button>

      <button type="button" className="nav-item">
        <AiOutlineEnvironment className="nav-icon" />
        <span className="nav-label">지도</span>
      </button>

      <button
        type="button"
        className="nav-item"
        onClick={() => navigate("/dashboard")}
      >
        <AiOutlineUser className="nav-icon" />
        <span className="nav-label">대시보드</span>
      </button>

      <button
        type="button"
        className="nav-item"
        onClick={() => navigate("/mypage")}
      >
        <FiMoreHorizontal className="nav-icon" />
        <span className="nav-label">더보기</span>
      </button>
    </nav>
  );
};

export default BottomNav;
