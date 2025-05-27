import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../BottomNav/BottomNav";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const goSignup = (type) => {
    navigate("/signup", { state: { authType: type } });
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-container">
        <h1 className="landing-title">집터</h1>
        <p className="landing-subtitle">: 새로운 집터의 출발</p>
        <div className="landing-buttons">
          <button className="btn kakao-btn" onClick={() => goSignup("카카오")}>
            Login with Kakao
          </button>
          <button className="btn naver-btn" onClick={() => goSignup("네이버")}>
            네이버 로그인
          </button>
          <button className="btn apple-btn" onClick={() => goSignup("Apple")}>
            Sign in with Apple
          </button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default LandingPage;
