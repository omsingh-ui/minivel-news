import { latestNews } from "../data/newsData";

function LatestNews() {
  return (
    <section className="relative overflow-hidden bg-[#0a0d0d] text-white">
      {/* Background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-400/[0.035] blur-[110px]" />

        <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full bg-white/[0.02] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-300/75">
              Live Desk
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Latest News
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">
              Updated Stories
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[0.34fr_1.66fr] gap-7 lg:gap-9 mt-8">
          {/* Left Status Card */}
          <aside className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-6 md:p-7 min-h-[330px] backdrop-blur-sm">
            <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-emerald-400/[0.08] blur-3xl transition-transform duration-[1800ms] group-hover:translate-x-4 group-hover:translate-y-4" />

            <div className="relative h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                    Now Reading
                  </p>

                  <span className="h-7 w-7 rounded-full border border-white/10 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <p className="mt-6 text-6xl md:text-7xl font-light tracking-[-0.05em]">
                  {String(latestNews.length).padStart(2, "0")}
                </p>

                <p className="mt-1 text-sm text-white/45">
                  current stories
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-emerald-300/75">
                  Editorial Focus
                </p>

                <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                  Business, hiring, careers and workplace developments worth
                  following now.
                </p>
              </div>
            </div>
          </aside>

          {/* News Cards */}
          <div className="space-y-3">
            {latestNews.map((news, index) => (
              <article
                key={news.id}
                className="news-row group relative overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.025] px-5 md:px-6 py-5 md:py-6 transition-all duration-500 hover:border-emerald-400/25 hover:bg-white/[0.045] hover:-translate-y-[2px]"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/[0.045] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                <div className="relative grid md:grid-cols-[72px_120px_1fr_52px] gap-4 md:gap-6 items-center">
                  {/* Number */}
                  <div>
                    <span className="text-3xl md:text-4xl font-light text-white/20 transition-all duration-500 group-hover:text-emerald-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category */}
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-white/45 transition-colors duration-300 group-hover:border-emerald-400/25 group-hover:text-emerald-300">
                      {news.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[19px] md:text-[23px] font-medium leading-snug tracking-[-0.015em] transition-transform duration-500 group-hover:translate-x-1">
                      {news.title}
                    </h3>

                    <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs text-white/35">
                      <span>{news.source}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <a
                    href={news.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-end"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/55 transition-all duration-400 group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-black group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;