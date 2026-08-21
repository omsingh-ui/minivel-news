import { businessStories } from "../data/newsData";

function BusinessIndustry() {
  return (
    <section className="bg-[#080b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">

        {/* Header */}
        <div className="flex items-end justify-between border-b border-white/12 pb-4">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.24em] text-emerald-300/75">
              Business & Industry
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-medium tracking-[-0.02em]">
              Signals shaping the market.
            </h2>
          </div>

          <p className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-white/35">
            Analysis / 04
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 lg:gap-12 mt-8">

          {/* Left - Signal List */}
          <div className="border-t border-white/12">
            {businessStories.map((story, index) => (
              <article
                key={story.id}
                className="group relative grid grid-cols-[55px_1fr] gap-4 py-6 border-b border-white/12"
              >
                <span className="text-sm text-white/25 transition-colors duration-300 group-hover:text-emerald-300">
                  0{index + 1}
                </span>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-300/65">
                    {story.category}
                  </p>

                  <h3 className="mt-3 text-xl md:text-2xl font-medium leading-snug tracking-[-0.015em]">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-[1.7] text-white/50">
                    {story.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-white/30">
                      {story.source}
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>

                <span className="absolute bottom-[-1px] left-0 h-[1px] w-0 bg-emerald-400 transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* Right - Main Analysis Visual */}
          <div>
            <div className="group relative h-[420px] md:h-[520px] overflow-hidden">
              <img
                src="/images/business-industry.jpg"
                alt="Business and industry"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute top-5 left-5">
                <span className="border border-white/20 bg-black/25 backdrop-blur-sm px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/70">
                  Industry Brief
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[9px] uppercase tracking-[0.2em] text-emerald-200/80">
                  What We&apos;re Watching
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl md:text-3xl font-medium leading-tight">
                  Growth, hiring and workforce shifts are changing how
                  businesses plan for what comes next.
                </h3>
              </div>
            </div>

            {/* Bottom signal strip */}
            <div className="grid grid-cols-3 border-x border-b border-white/12">
              <div className="p-4 md:p-5">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Market
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Expansion
                </p>
              </div>

              <div className="p-4 md:p-5 border-l border-white/12">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Workforce
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Skills Demand
                </p>
              </div>

              <div className="p-4 md:p-5 border-l border-white/12">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Outlook
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Growth
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BusinessIndustry;