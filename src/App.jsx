import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/SignupPage/SignupPage";
import MainPage from "./components/MainPage/MainPage";
import SearchResultsPage from "./components/SearchResults/SearchResultsPage";
import NeighborhoodInfoPage from "./components/Neighborhood/NeighborhoodInfoPage";
import ApartmentDetailPage from "./components/ApartmentDetail/ApartmentDetailPage";
import NotificationCenterPage from "./components/NotificationCenter/NotificationCenterPage";
import AiSettingsPage from "./components/AiSettings/AiSettingsPage";
import AiRegionPage from "./components/AiSettings/AiRegionPage";
import AiRecommendationPage from "./components/AiSettings/AiRecommendationPage";
import DashboardPage from "./components/Dashboard/DashboardPage";
import MyPagePage from "./components/MyPage/MyPagePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPageWithSearch />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/neighborhood" element={<NeighborhoodInfoPage />} />
        <Route path="/apartment-detail" element={<ApartmentDetailPage />} />
        <Route path="/notifications" element={<NotificationCenterPage />} />
        <Route path="/ai-settings" element={<AiSettingsPage />} />
        <Route path="/ai-region" element={<AiRegionPage />} />
        <Route path="/ai-results" element={<AiRecommendationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/mypage" element={<MyPagePage />} />
      </Routes>
    </Router>
  );
}

// onSearch prop을 MainPage에 넘겨줍니다
function MainPageWithSearch() {
  const navigate = useNavigate();
  return (
    <MainPage
      onSearch={(location) => navigate("/search", { state: { location } })}
    />
  );
}

export default App;

// 필수 설치
// npm install  react-router-dom
// npm install react-icons
