// src/components/MainPage/Header.jsx
import React from "react";
import { FiBell } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="mp-header">
      <h1 className="mp-logo">집터</h1>
      {/* 벨 아이콘 클릭 시 /notifications 로 이동 */}
      <FiBell
        className="mp-bell"
        onClick={() => navigate("/notifications")}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
};

export default Header;
