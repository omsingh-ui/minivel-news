import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewsHero from "./components/NewsHero";
import FeaturedStory from "./components/FeaturedStory";
import LatestNews from "./components/LatestNews";
import ArticleGrid from "./components/ArticleGrid";
import BusinessIndustry from "./components/BusinessIndustry";
import VisualStory from "./components/VisualStory";
import CareersWorkplace from "./components/CareersWorkplace";
import TrendingStories from "./components/TrendingStories";
import EditorsPick from "./components/EditorsPick";
import NewsFooterCTA from "./components/NewsFooterCTA";

import Insights from "./pages/Insights";
import TalentHiring from "./pages/TalentHiring";
import WorkforceBusiness from "./pages/WorkforceBusiness";
import CareersGrowth from "./pages/CareersGrowth";
import FutureOfWork from "./pages/FutureOfWork";
import ArticleDetail from "./pages/ArticleDetail";
import ScrollToTop from "./components/ScrollToTop";
function Home() {
  return (
    <main>
      <NewsHero />
      <FeaturedStory />
      <LatestNews />
      <ArticleGrid />
      <BusinessIndustry />
      <VisualStory />
      <CareersWorkplace />
      <TrendingStories />
      <EditorsPick />
      <NewsFooterCTA />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>
        {/* News Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Insights Page */}
        <Route path="/insights" element={<Insights />} />

        <Route path="/talent-hiring" element={<TalentHiring />} />

        <Route
          path="/workforce-business"
          element={<WorkforceBusiness />}
        />

        <Route path="/careers-growth" element={<CareersGrowth />} />

        <Route path="/future-of-work" element={<FutureOfWork />} />

        <Route
          path="/article/:slug"
          element={<ArticleDetail />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;