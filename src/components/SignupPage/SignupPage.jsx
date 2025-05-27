import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const authType = state?.authType || "";

  const [phone, setPhone] = useState("");
  const [nickname, setNickname] = useState("");
  const [region, setRegion] = useState("");
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(false);
  const [notifySMS, setNotifySMS] = useState(false);
  const [notifyPost, setNotifyPost] = useState(false);

  const [errPhone, setErrPhone] = useState(false);
  const [errNickname, setErrNickname] = useState(false);
  const [errPrivacy, setErrPrivacy] = useState(false);

  const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;

  const validate = () => {
    let ok = true;
    if (!phoneRegex.test(phone)) {
      setErrPhone(true);
      ok = false;
    } else {
      setErrPhone(false);
    }
    if (nickname.trim().length < 2) {
      setErrNickname(true);
      ok = false;
    } else {
      setErrNickname(false);
    }
    if (!agreePrivacy) {
      setErrPrivacy(true);
      ok = false;
    } else {
      setErrPrivacy(false);
    }
    return ok;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log({
      authType,
      email: "Gachon@gachon.ac.kr",
      phone,
      nickname,
      region,
      agreePrivacy,
      notifyEmail,
      notifySMS,
      notifyPost,
    });
    navigate("/main");
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← 회원 가입
        </button>
      </header>

      <div className="signup-form-wrap">
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          {/* 소셜 로그인 */}
          <div className="form-group">
            <label>소셜 로그인 종류</label>
            <input
              type="text"
              value={authType}
              readOnly
              className="input readonly"
            />
          </div>

          {/* 이메일 */}
          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              value="Gachon@gachon.ac.kr"
              readOnly
              className="input readonly"
            />
          </div>

          {/* 전화번호 */}
          <div className="form-group">
            <label>전화번호 *</label>
            <div className="input-wrapper">
              <input
                type="tel"
                placeholder="010-1234-5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`input${errPhone ? " error" : ""}`}
              />
              {errPhone && (
                <AiOutlineExclamationCircle className="error-icon" />
              )}
            </div>
            {errPhone && (
              <p className="error-text">전화번호 형식이 잘못 되었습니다</p>
            )}
          </div>

          {/* 닉네임 */}
          <div className="form-group">
            <label>닉네임 *</label>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="2자 이상 입력"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className={`input${errNickname ? " error" : ""}`}
              />
              {errNickname && (
                <AiOutlineExclamationCircle className="error-icon" />
              )}
            </div>
            {errNickname && (
              <p className="error-text">유효한 닉네임을 입력해주세요</p>
            )}
          </div>

          {/* 관심 지역 */}
          <div className="form-group">
            <label>관심 지역 *</label>
            <input
              type="text"
              placeholder="관심 지역 입력"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="input"
            />
          </div>

          {/* 개인정보 동의 */}
          <div className="form-group">
            <label>개인정보 수집/이용 동의 *</label>
            <div className="privacy-box">
              <p className="privacy-text">
                Shinola planned to make audio gear from the very beginning, and
                built turntables since his days as a teenage DJ.
              </p>
              <FiChevronRight className="chevron-icon" />
            </div>
            <div className="toggle-wrap">
              {errPrivacy && <p className="error-text">필수 동의 항목입니다</p>}
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={agreePrivacy}
                  onChange={() => setAgreePrivacy((v) => !v)}
                />
                <span className="slider" />
              </label>
            </div>
          </div>

          {/* 알림 동의 여부 */}
          <div className="form-group">
            <label>알림 동의 여부 *</label>
            <div className="notify-group">
              <div className="notify-item">
                <label className="toggle small">
                  <input
                    type="checkbox"
                    checked={notifyEmail}
                    onChange={() => setNotifyEmail((v) => !v)}
                  />
                  <span className="slider" />
                </label>
                <span className="notify-label">이메일</span>
              </div>
              <div className="notify-item">
                <label className="toggle small">
                  <input
                    type="checkbox"
                    checked={notifySMS}
                    onChange={() => setNotifySMS((v) => !v)}
                  />
                  <span className="slider" />
                </label>
                <span className="notify-label">SMS</span>
              </div>
              <div className="notify-item">
                <label className="toggle small">
                  <input
                    type="checkbox"
                    checked={notifyPost}
                    onChange={() => setNotifyPost((v) => !v)}
                  />
                  <span className="slider" />
                </label>
                <span className="notify-label">우편</span>
              </div>
            </div>
          </div>

          <button className="submit-btn" type="submit">
            완료
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
