import { Link } from "react-router-dom";
import { featuredArticles } from "../data/newsData";

function ArticleGrid() {
  return (
    <section className="bg-[#e9ece8] text-[#111111]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-black/15 pb-4">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-700/70">
              Articles
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.025em]">
              Ideas & Perspectives
            </h2>
          </div>

          <Link
  to="/insights"
  className="group hidden md:inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-black/45 transition-colors hover:text-black"
>
  View All Insights

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
        </div>

        {/* Articles */}
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-10 mt-8">

          
          {/* Main Article */}
          <Link
            to="/article/skills-first-hiring"
            className="group block"
          >
            <div className="relative h-[360px] md:h-[500px] overflow-hidden rounded-[20px]">
              <img
                src={featuredArticles[0].image}
                alt={featuredArticles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute top-5 left-5">
                <span className="rounded-full border border-white/20 bg-black/25 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/80">
                  {featuredArticles[0].category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                  Featured Article
                </p>

                <h3 className="mt-2 max-w-xl text-2xl md:text-3xl font-medium leading-tight">
                  {featuredArticles[0].title}
                </h3>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-[15px] md:text-[16px] leading-[1.7] text-black/55">
              {featuredArticles[0].description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-sm text-black/40">
                {featuredArticles[0].readTime}
              </p>

              <span className="group/arrow flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:bg-[#111] group-hover:text-white">
              <span className="transition-transform duration-300 group-hover/arrow:translate-x-1">
               →
              </span>
              </span>
            </div>
          </Link>

          {/* Secondary Articles */}
          <div className="space-y-5">
           {featuredArticles.slice(1).map((article, index) => (
  <Link
    key={article.id}
    to={`/article/${article.slug}`}
    className="group grid sm:grid-cols-[180px_1fr] gap-5 rounded-[18px] border border-black/[0.08] bg-white/60 p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
  >
                {/* Image */}
                <div className="relative h-[170px] sm:h-full min-h-[180px] overflow-hidden rounded-[14px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-700/70">
                        {article.category}
                      </p>

                      <span className="text-[10px] text-black/35">
                        0{index + 2}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl md:text-2xl font-medium leading-snug tracking-[-0.015em] transition-colors duration-300 group-hover:text-emerald-900">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-black/50">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-xs text-black/40">
                      {article.readTime}
                    </p>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-[#111] group-hover:text-white">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ArticleGrid;