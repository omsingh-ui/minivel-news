import { BrowserRouter, Routes, Route } from "react-router-dom";

import NewsHero from "./components/NewsHero";
import FeaturedStory from "./components/FeaturedStory";
import LatestNews from "./components/LatestNews";
import ArticleGrid from "./components/ArticleGrid";
import BusinessIndustry from "./components/BusinessIndustry";
import VisualStory from "./components/VisualStory";
import CareersWorkplace from "./components/CareersWorkplace";
import TrendingStories from "./components/TrendingStories";
import NewsFooterCTA from "./components/NewsFooterCTA";
import TalentHiring from "./pages/TalentHiring";
import WorkforceBusiness from "./pages/WorkforceBusiness";
import CareersGrowth from "./pages/CareersGrowth";
import FutureOfWork from "./pages/FutureOfWork";
import ArticleDetail from "./pages/ArticleDetail";
import ScrollToTop from "./components/ScrollToTop";
import Careers from "./pages/Careers";
import JobOpenings from "./pages/JobOpenings";
import WorkforceChallenges from "./pages/WorkforceChallenges";
import WorkforceChallengeDetail from "./pages/WorkforceChallengeDetail";
function Home() {
  return (
    <main>
      <NewsHero />

      <FeaturedStory />

      <section id="latest">
        <LatestNews />
      </section>

      <ArticleGrid />
      
      <section id="business">
        <BusinessIndustry />
      </section>

      <VisualStory />

      <section id="workplace">
        <CareersWorkplace />
      </section>

      <TrendingStories />

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
        
         {/* Careers Pages */}
         <Route path="/careers" element={<Careers />} />
         <Route path="/careers/jobs" element={<JobOpenings />} />

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
        <Route
         path="/workforce-challenges"
         element={<WorkforceChallenges />}
        />
        <Route
  path="/workforce-challenges/:id"
  element={<WorkforceChallengeDetail />}
/>

        
      </Routes>

    </BrowserRouter>
  );
}

export default App;