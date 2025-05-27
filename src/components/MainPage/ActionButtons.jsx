// components/MainPage/ActionButtons.jsx
import React from "react";
import "./ActionButtons.css";

const ActionButtons = ({ onClick }) => (
  <div className="mp-actions">
    <button onClick={() => onClick("찜한아파트")}>찜한 아파트</button>
    <button onClick={() => onClick("방내놓기")}>방 내놓기</button>
    <button onClick={() => onClick("이벤트")}>이벤트</button>
  </div>
);

export default ActionButtons;
