// src/components/MainPage/SearchBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import "./SearchBar.css";

const DEFAULT_SUGGESTIONS = [
  "성남시 분당구 야탑동",
  "성남시 분당구 삼평동",
  "성남시 분당구 이매동",
  "성남시 분당구",
  "성남시",
];

const SearchBar = () => {
  const [q, setQ] = useState("");
  const [filtered, setFiltered] = useState(DEFAULT_SUGGESTIONS);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const f = DEFAULT_SUGGESTIONS.filter((item) => item.includes(q)).slice(
      0,
      5
    );
    setFiltered(f);
  }, [q]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setQ(item);
    setSelected(item);
    setShow(false);
  };

  const handleSearch = () => {
    const term = selected || q;
    if (term) {
      navigate("/search", { state: { location: term } });
      setShow(false);
    }
  };

  return (
    <div className="mp-search-wrapper" ref={ref}>
      <div className="mp-search">
        <input
          type="text"
          placeholder="찾고 싶은 아파트를 입력하세요"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setShow(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
        />
        <button type="button" onClick={handleSearch}>
          <FiSearch />
        </button>
      </div>
      {show && (
        <ul className="search-suggestions">
          {filtered.map((item) => (
            <li
              key={item}
              className="suggestion-item"
              onClick={() => handleSelect(item)}
            >
              <span>{item}</span>
              {selected === item && <AiOutlineCheck className="check-icon" />}
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="suggestion-item no-result">검색 결과가 없습니다</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
