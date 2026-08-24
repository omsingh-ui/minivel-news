import { latestNews } from "../data/newsData";

function LatestNews() {
  return (
    <section className="relative overflow-hidden bg-[#0b0e0e] text-white">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-emerald-400/[0.035] blur-[110px]" />

        <div className="absolute right-[-120px] bottom-[-100px] h-96 w-96 rounded-full bg-white/[0.02] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-16">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-emerald-300/75 md:text-xs">
              Live Desk
            </p>

            <h2 className="mt-2 text-3xl font-medium tracking-[-0.025em] md:text-4xl">
              Latest News
            </h2>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
              Updated Stories
            </p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          {/* Live Desk Panel */}
          <aside className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-6 md:p-7">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/[0.07] blur-3xl" />

            <div className="relative z-10 flex h-full min-h-[290px] flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                    Live Desk
                  </p>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <p className="mt-6 text-[64px] font-light leading-none tracking-[-0.06em]">
                  {String(latestNews.length).padStart(2, "0")}
                </p>

                <p className="mt-2 text-sm text-white/40">
                  current stories
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/70">
                  Editorial Focus
                </p>

                <p className="mt-3 text-[14px] leading-[1.7] text-white/55">
                  Hiring, careers, workforce and business developments worth
                  following now.
                </p>
              </div>
            </div>
          </aside>

          {/* Horizontal News Deck */}
          <div className="overflow-hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-7 pr-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {latestNews.map((news, index) => (
                <article
                  key={news.id}
                  className={`group relative min-w-[82%] snap-start overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#121716] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.24)] transition-all duration-700 ease-out hover:-translate-y-1 hover:border-emerald-400/20 hover:shadow-[0_22px_60px_rgba(0,0,0,0.34)] sm:min-w-[58%] md:p-7 lg:min-w-[44%] ${
                    index !== 0 ? "-ml-4 md:-ml-5" : ""
                  }`}
                  style={{
                    zIndex: index + 1,
                  }}
                >
                  {/* Soft overlap edge */}
                  {index !== 0 && (
                    <div className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-5 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />
                  )}

                  {/* Card atmosphere */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-300/[0.055] blur-3xl opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="absolute inset-[9px] rounded-[17px] border border-white/[0.03]" />

                    <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />
                  </div>

                  <div className="relative z-10 flex min-h-[315px] flex-col justify-between">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
                          {news.category}
                        </p>

                        <p className="mt-2 text-[10px] text-white/32">
                          {news.date}
                        </p>
                      </div>

                      {/* More Visible Number */}
                      <div className="text-right">
                        <p className="text-[8px] uppercase tracking-[0.22em] text-white/22">
                          No.
                        </p>

                        <span className="mt-1 block select-none text-[52px] font-medium leading-[0.82] tracking-[-0.07em] text-white/[0.16] transition-all duration-500 group-hover:text-emerald-300/65 md:text-[58px]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Story */}
                    <div className="mt-10 pr-8">
                      <h3 className="max-w-md text-[22px] font-medium leading-[1.18] tracking-[-0.025em] md:text-[25px]">
                        {news.title}
                      </h3>

                      <p className="mt-4 max-w-md text-[13px] leading-[1.7] text-white/48 md:text-[14px]">
                        {news.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.2em] text-white/25">
                          Source
                        </p>

                        <p className="mt-1.5 text-[12px] text-white/58">
                          {news.source}
                        </p>
                      </div>

                      <a
                        href={news.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/55 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-300 hover:text-black"
                      >
                        →
                      </a>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-emerald-300/18 to-transparent" />
                </article>
              ))}
            </div>

            {/* Hint */}
            <div className="mt-2 flex items-center justify-between">
              <p className="text-[8px] uppercase tracking-[0.18em] text-white/20">
                Scroll to explore
              </p>

              <div className="flex gap-1">
                {latestNews.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 rounded-full ${
                      index === 0
                        ? "w-6 bg-emerald-300/70"
                        : "w-2 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestNews;