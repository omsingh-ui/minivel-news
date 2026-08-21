import NewsHero from "./components/NewsHero";
import FeaturedStory from "./components/FeaturedStory";
import LatestNews from "./components/LatestNews";
import ArticleGrid from "./components/ArticleGrid";
import BusinessIndustry from "./components/BusinessIndustry";
import CareersWorkplace from "./components/CareersWorkplace";
import TrendingStories from "./components/TrendingStories";
import EditorsPick from "./components/EditorsPick";
import NewsFooterCTA from "./components/NewsFooterCTA";
function App() {
  return (
    <main>
      <NewsHero />
      <FeaturedStory />
      <LatestNews />
      <ArticleGrid />
      <BusinessIndustry />
      <CareersWorkplace />
      <TrendingStories />
      <EditorsPick />
      <NewsFooterCTA />
    </main>
  );
}

export default App;