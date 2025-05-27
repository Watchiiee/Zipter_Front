import React from "react";
import "./PopularSection.css";
// assets 폴더에 있는 이미지 파일 경로를 실제 이름으로 맞춰주세요
import mpPrestige from "../../assets/Mapo.jpg";
import acroRiver from "../../assets/Ark.jpg";
import raemian from "../../assets/Raemian.jpg";
import { FiChevronRight } from "react-icons/fi";

const PopularSection = () => {
  const apartments = [
    {
      id: "mapo",
      title: "마포구 마포프레스티지자이",
      img: mpPrestige,
    },
    {
      id: "acro",
      title: "서초구 반포 아크로리버파크",
      img: acroRiver,
    },
    {
      id: "raemian",
      title: "강남구 래미안대치팰리스",
      img: raemian,
    },
  ];

  return (
    <section className="mp-popular">
      <div className="mp-popular-header">
        <h2 className="mp-section-title">요즘 인기 있는 아파트 목록</h2>
        <button className="mp-more-btn" aria-label="더 보기">
          <FiChevronRight />
        </button>
      </div>
      <div className="mp-popular-list">
        {apartments.map((apt) => (
          <div key={apt.id} className="mp-card">
            <img src={apt.img} alt={apt.title} className="mp-card-image" />
            <div className="mp-card-title">{apt.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularSection;
